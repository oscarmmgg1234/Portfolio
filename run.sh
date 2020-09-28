#!/usr/bin/env bash

#gives permision to run this script
chmod +x runr.sh

#Input for commit title 
read -p 'Commit Message: ' COMMIT

#git commit 
git add .
git commit -m "$COMMIT"
git push origin master

#build for firebase
npm run build

#firebase deploy
firebase deploy --only hosting

echo 'Script Done Boiii'
