#!/bin/bash

changed_files=$(git diff --name-only HEAD^ HEAD | grep "index.html" || echo "")

if [ "$changed_files" != "" ];then

    for file in $changed_files; do
        DIR=$(dirname "$file")
        echo $DIR
        node scripts/screenshot.js "$file" "$DIR/screengrab.png"
    done
else
     echo "No new changes to your index files, exiting "
fi