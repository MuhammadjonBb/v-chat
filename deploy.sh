#!/bin/bash
npm run build

cd dist

git init
git remote add origin https://github.com/MuhammadjonBb/v-chat.git
git branch -M gh-pages
git add .
git commit -m "deploy"
git push -f origin gh-pages
