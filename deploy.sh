#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'Deploy'
git push -f git@github.com:devil159468/devil159468.github.io.git master:gh-pages

cd -
rm -rf docs/.vitepress/dist
