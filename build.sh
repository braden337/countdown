#!/usr/bin/env sh

mkdir -p dist

for file in *.{html,css,compiled.js}
  do cp -v "$file" dist
done