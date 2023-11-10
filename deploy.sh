#!/bin/bash

# Increment version number
version=$(cat version.txt)
version=$((version+1))
echo $version > version.txt

# Build the project
yarn build

# Copy the version file to the build directory
cp version.txt dist/

# Navigate into the build output directory
cd dist

# Optional: Add fallback redirection script to index.html
# echo 'YOUR_FALLBACK_SCRIPT' >> index.html

# Initialize a new git repository
git init
git add -A
git commit -m "Deploy version $version"
git push -f git@github.com:Project-Starry-Game/official.git main:gh-pages

# Return to the previous directory
cd -
