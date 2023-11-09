#!/bin/bash

# Build the project
yarn build

# Navigate into the build output directory
cd dist

# Add fallback redirection script to index.html
# Make sure to replace 'YOUR_FALLBACK_SCRIPT' with the actual script content
echo 'YOUR_FALLBACK_SCRIPT' >> index.html

# Copy the custom 404.html after modifying the index.html
cp ../custom_404.html 404.html

git init
git add -A
git commit -m 'deploy'

# If you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Project-Starry-Game/official.git main:gh-pages

cd -