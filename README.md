# kinetik

<a href="https://github.com"><img alt="GitHub" width="70" height="20" src="https://img.shields.io/badge/-github-blueviolet?logo=github&logoColor=white"></a>
<a href="https://github.com/sauljabin/kinetik/blob/main/LICENSE"><img alt="MIT License" src="https://img.shields.io/github/license/sauljabin/kinetik"></a>
<br/>
<a href="https://angular.io/"><img alt="Angular" width="70" height="20" src="https://img.shields.io/badge/-angular-C3012F?logo=angular&logoColor=white"></a>
<a href="https://angular.io/"><img alt="Angular" src="https://img.shields.io/github/package-json/dependency-version/sauljabin/kinetik/@angular/core"></a>
<br/>
<a href="https://nodejs.org/en/"><img alt="Node" width="70" height="20" src="https://img.shields.io/badge/-node.js-339933?logo=node.js&logoColor=white"></a>
<a href="https://nodejs.org/en/"><img alt="Node" src="https://img.shields.io/badge/version-18.14.2-blue"></a>
<br>
<a href="https://ksqldb.io/"><img alt="ksqlDB" width="70" height="20" src="https://img.shields.io/badge/-ksqlDB-F05662?logo=apache-kafka&logoColor=white"></a>
<a href="https://ksqldb.io/"><img alt="ksqlDB" src="https://img.shields.io/badge/version-0.28.3-blue"></a>
<br>
<a href="https://www.docker.com/"><img alt="Docker" width="70" height="20" src="https://img.shields.io/badge/-docker-blue?logo=docker&logoColor=white"></a>
<a href="https://hub.docker.com/r/sauljabin/kinetik"><img alt="Docker Image Version (latest by date)" src="https://img.shields.io/docker/v/sauljabin/kinetik?label=tag"></a>
<a href="https://hub.docker.com/r/sauljabin/kinetik"><img alt="Docker Image Size (latest by date)" src="https://img.shields.io/docker/image-size/sauljabin/kinetik"></a>

**kinetik** is a **WIP** [ksqlDB](https://ksqldb.io/) UI.

## Getting Start

Run kinetik:

```shell
cd cluster && docker compose up -d
docker run -d --name kinetik -it -p 80:80 --network cluster sauljabin/kinetik:latest
```

> Open <http://localhost/>

## Configuration

Environment Variable:

| Variable        | Default              |
| --------------- | -------------------- |
| KINETIK_HOST    | localhost            |
| KINETIK_PORT    | 80                   |
| KSQLDB_URL      | <http://ksqldb:8088> |
| KSQLDB_USER     |                      |
| KSQLDB_PASSWORD |                      |

```shell
docker run -it -p 80:80 \
    -e KINETIK_PORT=80 \
    -e KINETIK_HOST=localhost \
    -e KSQLDB_URL=<url> \
    -e KSQLDB_USER=<user> \
    -e KSQLDB_PASSWORD=<password> \
    sauljabin/kinetik:latest
```

## Development

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

### Docker Build

Build image:

```shell
docker build -t sauljabin/kinetik:latest .
```

Run:

```shell
docker run -it -p 80:80 --network cluster sauljabin/kinetik:latest
```

### ksqlDB REST Utils

List topics:

```shell
http POST :8088/ksql Accept:application/vnd.ksql.v1+json ksql="LIST TOPICS;"
```

### Tools

- Get `http` at <https://httpie.io/cli>
- Get `ng` at <https://angular.io/cli>
- Get `ksql` at <https://github.com/sauljabin/kafka-cli-installer>
