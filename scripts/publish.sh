#!/bin/bash
set -e

version=$(node scripts/version.js)

read -p "publish version $version? [y/n]: " -n 1 -r reply
echo

if [[ $reply =~ ^[yY]$ ]]
then
  yarn test 
  yarn build
else
  echo "operation cancelled"
fi
