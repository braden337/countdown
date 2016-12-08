#!/usr/bin/env sh

if [ "$1" = "-b" ]; then
  
  mkdir -p dist

  for file in *.{html,css,compiled.js}
    do cp -v "$file" dist
  done

elif [ "$1" = "-c" ]; then

  rm -rf dist
  rm app.compiled.js

else

  echo "Usage: sh utilities.sh [options]\nOptions:\n\t-b\tbuild files\n\t-c\tclean files"

fi