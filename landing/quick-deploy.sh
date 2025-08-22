#!/bin/bash

echo "🚀 Quick Deploy Starting..."

# Fast build (no compression for speed)
echo "📦 Building SCSS to CSS..."
sass assets/css/style.scss assets/css/style.css --style expanded

# Quick git operations
echo "📝 Quick git operations..."
git add assets/css/style.css
git commit -m "Quick update: $(date '+%H:%M:%S')"
git push origin main

echo "🎉 Quick deploy completed!"
echo "🌐 Check: https://me-gee.github.io/landing" 