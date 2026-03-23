#!/bin/bash
# Convert GitBook-style markdown files to VitePress-compatible format
# This handles:
#   1. {% embed url="..." %} → responsive iframe
#   2. <figure><img src="..."><figcaption>...</figcaption></figure> → simple ![alt](src)
#   3. Fix relative image paths (../.gitbook/assets/ → /images/)
#   4. Replace CCBus references (previously CCBusTool)
#   5. Fix internal links for VitePress locale structure

DOCS_DIR="docs/zh"

find "$DOCS_DIR" -name '*.md' -type f | while read -r file; do
  # Skip index.md (our custom home page)
  if [[ "$file" == "$DOCS_DIR/index.md" ]]; then
    continue
  fi

  echo "Converting: $file"

  # Create temp file
  tmp=$(mktemp)

  sed \
    -e 's|{% embed url="\(https://www\.youtube\.com/watch?v=\([^"]*\)\)" %}|<div class="video-container"><iframe src="https://www.youtube.com/embed/\2" allowfullscreen></iframe></div>|g' \
    -e 's|{% embed url="\([^"]*\)" %}|[\1](\1)|g' \
    -e 's|<figure><img src="\([^"]*\)" alt="\([^"]*\)"><figcaption>\(<p>\)\?\([^<]*\)\(</p>\)\?</figcaption></figure>|![\4](\1)|g' \
    -e 's|<figure><img src="\([^"]*\)" alt="\([^"]*\)"><figcaption></figcaption></figure>|![\2](\1)|g' \
    -e 's|\.\./\.gitbook/assets/|/images/|g' \
    -e 's|https://help\.ccbus\.cc/|/zh/|g' \
    "$file" > "$tmp"

  mv "$tmp" "$file"
done

echo "Conversion complete!"
