#!/usr/bin/env python3
"""Comprehensive image fix for all markdown files.
Converts ALL remaining image references to safe HTML img tags.
"""
import re
import glob

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 1. Convert markdown images ![alt](src) to <img> tags
    # This catches ALL markdown image syntax including complex URLs
    def md_img_to_html(m):
        alt = m.group(1) or ''
        src = m.group(2)
        # Normalize gitbook paths
        if '~gitbook' in src or '.gitbook' in src:
            # Extract a meaningful alt or use placeholder
            return f'<img src="/images/placeholder.png" alt="{alt}" />'
        # Normalize /images/ paths
        if src.startswith('/images/') or src.startswith('./images/') or src.startswith('../images/'):
            src = '/images/' + src.split('/images/')[-1]
        return f'<img src="{src}" alt="{alt}" />'

    content = re.sub(r'!\[([^\]]*)\]\(([^)]+)\)', md_img_to_html, content)

    # 2. Fix any <img> with gitbook URLs
    content = re.sub(
        r'<img src="[^"]*(?:~gitbook|\.gitbook)[^"]*"',
        '<img src="/images/placeholder.png"',
        content
    )

    # 3. Fix broken filenames with parentheses: "foo (1.png" -> "foo (1).png"
    content = re.sub(
        r'src="/images/([^"]*) \((\d+)\.(png|jpg|jpeg|gif|svg)"',
        r'src="/images/\1 (\2).\3"',
        content
    )

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {filepath}')

for filepath in glob.glob('docs/zh/**/*.md', recursive=True):
    fix_file(filepath)

print('Done!')
