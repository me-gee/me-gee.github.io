#!/bin/bash

echo "🚀 Starting automatic deployment..."

# Build SCSS to CSS
echo "📦 Building SCSS to CSS..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Git operations
    echo "📝 Adding files to git..."
    git add .
    
    echo "💾 Committing changes..."
    git commit -m "Auto-update: $(date '+%Y-%m-%d %H:%M:%S')"
    
    echo "🚀 Pushing to GitHub..."
    git push origin main
    
    echo "🎉 Deployment completed successfully!"
    echo "🌐 Check your portfolio at: https://me-gee.github.io/landing"
else
    echo "❌ Build failed! Please check your SCSS syntax."
    exit 1
fi 