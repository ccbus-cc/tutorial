#!/usr/bin/env bash
#
# release.sh - Merge dev into main, tag with incremental version, push, and switch back.
#
# Usage:
#   ./bin/release.sh           # Auto-increment patch version (e.g., v1.0.0 -> v1.0.1)
#   ./bin/release.sh v2.0.0    # Use a specific tag
#
# Workflow:
#   1. Ensure working tree is clean
#   2. Merge current branch (dev) into main
#   3. Create an incremental tag on main
#   4. Push main branch and tag to remote
#   5. Switch back to the original branch (dev)

set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

info()  { echo -e "${GREEN}[INFO]${NC} $*"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $*"; }
error() { echo -e "${RED}[ERROR]${NC} $*" >&2; exit 1; }

# --- Pre-flight checks ---

# Ensure we're in a git repository
git rev-parse --is-inside-work-tree > /dev/null 2>&1 || error "Not a git repository"

# Save the current branch to switch back later
CURRENT_BRANCH=$(git symbolic-ref --short HEAD 2>/dev/null) || error "Cannot determine current branch (detached HEAD?)"

# Ensure working tree is clean
if ! git diff --quiet || ! git diff --cached --quiet; then
    error "Working tree is not clean. Please commit or stash your changes first."
fi

# Ensure we have a remote
REMOTE=$(git remote | head -1)
[ -n "$REMOTE" ] || error "No git remote configured"

info "Current branch: $CURRENT_BRANCH"
info "Remote: $REMOTE"

# --- Determine the new tag ---

get_latest_tag() {
    # Get the latest semver tag (vX.Y.Z), sorted by version
    git tag -l 'v[0-9]*.[0-9]*.[0-9]*' --sort=-v:refname | head -1
}

increment_patch() {
    local tag=$1
    # Strip the leading 'v'
    local version=${tag#v}
    local major minor patch
    IFS='.' read -r major minor patch <<< "$version"
    patch=$((patch + 1))
    echo "v${major}.${minor}.${patch}"
}

if [ -n "${1:-}" ]; then
    NEW_TAG="$1"
    info "Using specified tag: $NEW_TAG"
else
    LATEST_TAG=$(get_latest_tag)
    if [ -z "$LATEST_TAG" ]; then
        NEW_TAG="v1.0.0"
        info "No existing tags found. Starting with $NEW_TAG"
    else
        NEW_TAG=$(increment_patch "$LATEST_TAG")
        info "Latest tag: $LATEST_TAG -> New tag: $NEW_TAG"
    fi
fi

# Check if tag already exists
if git rev-parse "$NEW_TAG" > /dev/null 2>&1; then
    error "Tag $NEW_TAG already exists"
fi

# --- Merge into main ---

info "Fetching latest from $REMOTE..."
git fetch "$REMOTE"

info "Switching to main branch..."
git checkout main

info "Pulling latest main from $REMOTE..."
git pull "$REMOTE" main --ff-only 2>/dev/null || true

info "Merging $CURRENT_BRANCH into main..."
if ! git merge "$CURRENT_BRANCH" --no-edit; then
    error "Merge conflict detected. Resolve conflicts, then run this script again."
fi

# --- Tag and push ---

info "Creating tag $NEW_TAG..."
git tag -a "$NEW_TAG" -m "Release $NEW_TAG"

info "Pushing main branch to $REMOTE..."
git push "$REMOTE" main

info "Pushing tag $NEW_TAG to $REMOTE..."
git push "$REMOTE" "$NEW_TAG"

# --- Switch back ---

info "Switching back to $CURRENT_BRANCH..."
git checkout "$CURRENT_BRANCH"

echo ""
info "Release complete!"
info "  Branch: main (merged from $CURRENT_BRANCH)"
info "  Tag:    $NEW_TAG"
info "  Remote: $REMOTE"
