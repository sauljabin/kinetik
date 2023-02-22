#!/bin/bash

set -e

export KINETIK_PORT="${KINETIK_PORT:=80}"
export KINETIK_HOST="${KINETIK_HOST:=localhost}"
KSQLDB_URL="${KSQLDB_URL:=http://ksqldb:8088}"

if [[ $KSQLDB_URL != */ ]]; then
  KSQLDB_URL="${KSQLDB_URL}/"
fi

export KSQLDB_URL

template=/etc/nginx/nginx.conf.template

if [[ ! -z ${KSQLDB_USER} && ! -z ${KSQLDB_PASSWORD} ]]; then
  template=/etc/nginx/nginx-auth.conf.template
  export KSQLDB_AUTH=$(echo -n "${KSQLDB_USER}:${KSQLDB_PASSWORD}" | base64 -w 0)
fi

envsubst '$KINETIK_PORT $KINETIK_HOST $KSQLDB_URL $KSQLDB_AUTH' <$template >/etc/nginx/nginx.conf

/docker-entrypoint.sh "$@"
