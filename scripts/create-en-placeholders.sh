#!/bin/bash
# Create English placeholder pages mirroring the Chinese structure
# Each placeholder contains a note that translation is in progress

DOCS_ZH="docs/zh"
DOCS_EN="docs/en"

find "$DOCS_ZH" -name '*.md' -type f | while read -r zhfile; do
  # Get relative path from zh dir
  relpath="${zhfile#$DOCS_ZH/}"
  enfile="$DOCS_EN/$relpath"

  # Skip index.md
  if [[ "$relpath" == "index.md" ]]; then
    continue
  fi

  # Create directory if needed
  mkdir -p "$(dirname "$enfile")"

  # Extract the first H1 heading from the Chinese file
  title=$(grep -m1 '^# ' "$zhfile" | sed 's/^# //')
  if [[ -z "$title" ]]; then
    title=$(basename "$relpath" .md)
  fi

  cat > "$enfile" << EOF
---
description: English version - Translation in progress
---

# ${title}

::: tip Translation in Progress
This page is being translated from Chinese. Please refer to the [Chinese version](/zh/${relpath%.md}) for the complete content.
:::
EOF

  echo "Created: $enfile"
done
