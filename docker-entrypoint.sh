#!/bin/sh

set -e

export KINETIK_PORT="${KINETIK_PORT:=80}"
export KINETIK_HOST="${KINETIK_HOST:=localhost}"

envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

/docker-entrypoint.sh "$@"