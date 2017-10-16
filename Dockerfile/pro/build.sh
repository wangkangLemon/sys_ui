#!/usr/bin/env bash

set -e

BASE_NAME="yst-provider-ui-probase"

docker build -t hub.docker.vodjk.com:5000/yst/provider-ui:probase ./base/
if [[ ! -z "$(docker ps -a|grep $BASE_NAME)" ]]; then
    docker rm -f $BASE_NAME
fi
docker create --name $BASE_NAME hub.docker.vodjk.com:5000/yst/provider-ui:probase
docker cp $BASE_NAME:/node/src/git.vodjk.com/yst/provider-ui .

tag=`git rev-parse --short=12 HEAD`

docker build -t hub.docker.vodjk.com:5000/yst/provider-ui:pro_${tag} .
docker tag hub.docker.vodjk.com:5000/yst/provider-ui:pro_${tag} hub.docker.vodjk.com:5000/yst/provider-ui:pro
docker push hub.docker.vodjk.com:5000/yst/provider-ui:pro_${tag}
docker push hub.docker.vodjk.com:5000/yst/provider-ui:pro

rm -fR provider-ui
docker rm $BASE_NAME
docker rmi hub.docker.vodjk.com:5000/yst/provider-ui:pro
docker rmi hub.docker.vodjk.com:5000/yst/provider-ui:pro_${tag}
