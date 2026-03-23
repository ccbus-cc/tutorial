#!/usr/bin/env python3
"""Fix broken image tags in VitePress markdown files.

Handles:
1. Broken <img> tags where filenames with parentheses got split
2. Any remaining <figure> tags
3. Ensures all image src use /images/ prefix
"""
import re
import glob
import os

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Fix broken img tags like: <img src="/images/foo (1" alt="" />.png)
    # Pattern: <img src="/images/FILENAME" broken by parentheses
    content = re.sub(
        r'<img src="(/images/[^"]*)"([^/]*)/>\.\w+\)',
        lambda m: f'<img src="{m.group(1)}.png" alt="" />',
        content
    )

    # More general fix: <img src="/images/...( NUMBER" alt="..." />.EXT)
    content = re.sub(
        r'<img src="(/images/[^"]*\([^"]*)"(\s+alt="[^"]*"\s*)/?>\.(\w+)\)',
        lambda m: f'<img src="{m.group(1)}.{m.group(3)}"{m.group(2)}/>',
        content
    )

    # Fix any remaining figure tags that weren't converted
    content = re.sub(
        r'<figure><img src="([^"]*)" alt="([^"]*)"><figcaption>(?:<p>)?([^<]*)(?:</p>)?</figcaption></figure>',
        r'<img src="\1" alt="\3" />',
        content
    )
    content = re.sub(
        r'<figure><img src="([^"]*)" alt="([^"]*)"><figcaption></figcaption></figure>',
        r'<img src="\1" alt="\2" />',
        content
    )

    # Fix .gitbook/assets paths that remain
    content = content.replace('../.gitbook/assets/', '/images/')
    content = content.replace('.gitbook/assets/', '/images/')

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {filepath}')

for filepath in glob.glob('docs/zh/**/*.md', recursive=True):
    fix_file(filepath)

print('Done!')
