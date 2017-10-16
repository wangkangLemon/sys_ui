#!/usr/bin/env bash

set -e

export BRANCH=$1
if [[ $BRANCH == "" ]]; then export BRANCH=develop; fi

cd /node/src/git.vodjk.com/yst/provider-ui
git pull origin $BRANCH
cd /node/src/git.vodjk.com/yst/provider-ui/assets
cp -f config/config.js.default config/config.js
yarn run build
cd /node/src/git.vodjk.com/yst/provider-ui
npm run start