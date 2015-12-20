#!/bin/bash
# publish dist to gh-pages

# store stash list
stash_list=$(git stash list)

npm run build &&
cp -r dist .. &&  # move to temp location
git add --all . &&
git stash &&
git checkout gh-pages &&
cp -r ../dist/* . &&
rm -r ../dist &&
git add --all . &&
git amend -m "update gh-pages" &&  # do not keep history
git push --force &&
git checkout master

# stash list is not equal -> pop
new_stash_list=$(git stash list)
if [ "$stash_list" != "$new_stash_list" ]
then
  echo "popping stash"
  git stash pop
fi
