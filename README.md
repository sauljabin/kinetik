# kinetik

**kinetik** is a [ksqlDB](https://ksqldb.io/) UI.

## Development Commands

Development server:

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

## Kafka Cluster

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


## Docker

Build image:

```shell
ng build
docker build -t sauljabin/kinetik:latest .
```

Run:

```shell
docker run -it -p 80:80 --network cluster sauljabin/kinetik:latest
```
