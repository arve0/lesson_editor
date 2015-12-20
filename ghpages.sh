#!/bin/bash
# publish dist to gh-pages

npm run build &&
git add --all . &&
git commit -m "update dist build" &&
cp -r dist .. &&  # move to temp location
git checkout gh-pages &&
cp -r ../dist/* . &&
rm -r ../dist &&
git add --all . &&
git amend -m "update gh-pages" &&  # do not keep history
git push --force &&
git checkout master
