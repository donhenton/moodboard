MOOD-02
Simple Masonry Mood Board for GitHub Pages

STRUCTURE
---------
index.html
style.css
script.js
images/

WHY THIS VERSION
----------------
This version uses CSS columns to create a masonry / Pinterest-like
layout. Images can have very different aspect ratios and heights.
They will automatically flow into columns.

ADDING IMAGES
-------------
1. Copy image files into the images folder.

2. Open script.js.

3. Add the filenames to the images list:

const images = [
    "images/photo01.jpg",
    "images/tall-reference.jpg",
    "images/wide-picture.png",
    "images/sketch.webp"
];

4. Save script.js.

LOCAL PREVIEW
-------------
Double-click index.html.

GITHUB PAGES
------------
Upload the contents of this folder to the ROOT of your GitHub repository.

Then:
Settings -> Pages

Source:
Deploy from a branch

Branch:
main

Folder:
/ (root)

NOTES
-----
- JPG, PNG, GIF, and WebP all work.
- GitHub filenames are case-sensitive.
- Clicking an image opens a large lightbox view.
- Press Escape, click the X, or click outside the image to close it.
