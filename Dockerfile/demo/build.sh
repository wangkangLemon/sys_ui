#!/usr/bin/env bash

set -e

docker build -t hub.docker.vodjk.com:5000/yst/provider-ui:demo .
docker push hub.docker.vodjk.com:5000/yst/provider-ui:demo
