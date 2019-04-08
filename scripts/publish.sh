#!/bin/bash
set -e

version=$(node scripts/version.js)

read -p "publish version $version? [y/n]: " -n 1 -r reply
echo

if [[ $reply =~ ^[yY]$ ]]
then
  yarn test 
  yarn build

  git tag -a v$version -m "v$version"
  git add -A
  git commit -m "📦 v$version"
  git push origin master --tags

  yarn publish

  echo "operation successful"
else
  echo "operation cancelled"
fi
