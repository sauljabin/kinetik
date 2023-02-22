# kinetik

**kinetik** is a [ksqlDB](https://ksqldb.io/) UI.

## Getting Start

Run kinetik:

```shell
docker run -it -p 80:80 \
    -e KINETIK_PORT=80 \
    -e KINETIK_HOST=localhost \
    -e KSQLDB_URL=<url> \
    -e KSQLDB_USER=<user> \
    -e KSQLDB_PASSWORD=<password> \
    sauljabin/kinetik:latest
```

Environment Variable:

| Variable | Default |
|---|---|
|KINETIK_HOST|localhost|
|KINETIK_PORT|80|
|KSQLDB_URL|<http://ksqldb:8088>|
|KSQLDB_USER||
|KSQLDB_PASSWORD||

## Commands

### Development

Server:

```shell
ng serve
```

> Open <http://localhost:4200/>

Code scaffolding:

```shell
ng generate component component-name
```

> You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Build:

```shell
ng build
```

> The build artifacts will be stored in the `dist/` directory.

Running unit tests:

```shell
ng test
```

Running end-to-end tests:

```shell
ng e2e
```

Lint:

```shell
ng lint
```

### Kafka Cluster

Run local cluster:

```shell
cd cluster
docker compose up -d
```

> Open <http://localhost:8080/>

Run ksqlDB cli:

```shell
ksql http://localhost:8088
```

> Install kafka cli tools from <https://github.com/sauljabin/kafka-cli-installer>

### Docker Build

Build image:

```shell
ng build
docker build -t sauljabin/kinetik:latest .
```

Run:

```shell
docker run -it -p 80:80 --network cluster sauljabin/kinetik:latest
```

### ksqlDB REST

List topics:

```shell
http POST :8088/ksql Accept:application/vnd.ksql.v1+json ksql="LIST TOPICS;"
```

> Install `httpie` from <https://httpie.io/cli>
