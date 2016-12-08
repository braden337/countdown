#!/usr/bin/env sh

if [ "$1" = "-b" ] || [ "$1" = "--build" ]; then
  
  mkdir -p dist

  for file in *.{html,css,compiled.js}
    do cp -v "$file" dist
  done

elif [ "$1" = "-c" ] || [ "$1" = "--clean" ]; then

  rm -rf dist *.compiled.js

else

  echo "Usage: sh utilities.sh [options]\nOptions:\n\t-b\tbuild files\n\t-c\tclean files"

fi
