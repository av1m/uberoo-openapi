# Uberoo OpenAPI

[![Deploy UberooAPI to GitHub Pages](https://github.com/av1m/uberoo-openapi/actions/workflows/gh-pages.yaml/badge.svg)](https://github.com/av1m/uberoo-openapi/actions/workflows/gh-pages.yaml)

![https://av1m.github.io/uberoo-openapi/](https://img.shields.io/static/v1?label=docs&message=Redocly&color=green)

Table of Contents:  

- [Uberoo OpenAPI](#uberoo-openapi)
  - [Get started](#get-started)
  - [Package.json](#packagejson)
    - [Build directory](#build-directory)
    - [Commands](#commands)
  - [CI/CD](#cicd)

## Get started

The prerequisites are:

- [node.js](https://nodejs.org/en/)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [python](https://www.python.org/) (only if you use `npm run swagger-python`)

Once you have the prerequisites installed, you can run the following commands:

```bash
npm run start
```

This command will generate `openapi.json` file and start the server (through Docker).
The server is available at [http://localhost:8080](http://localhost:8080).

## Package.json

### Build directory

All the files are generated in the `.build` directory.
The `.build` directory is created automatically when you run `npm run build`.

The final file are generated from the `src` directory; The ouput format is determined by the `config.extension` option in the `package.json` file.
Actuelly, the output format available are `json` and `yaml`.
To change the output format, you can change the `config.extension` option in the `package.json` file or check the next section.

### Commands

The [package.json](package.json) file contains many command line tools for working with the documentation.

To get a quick details of the available commands:

- **`build`** - Generate the documentation from the `src` directory in the `.build directory`. The files will be `.json` or `.yaml` depending on the `config.extension` option in the `package.json` file.
- **`watch`** - Regenerate the documentation when the `src` directory changes.
- **`test`** - Build the documentation and test the ouput file (that is in the `.build` directory)
- **`clean`** - Remove the `.build` directory
- **`swagger-docker`**  - Builds, (re)creates, starts, and attaches containers. There is two containers in the Dockerfile: `swagger-ui` and `swagger-api`. The `swagger-ui` container is used to display the documentation and the `swagger-api` container is used to serve a sample of the API (through [apisprout](https://hub.docker.com/r/danielgtaylor/apisprout)).
- **`swagger-python`**  - Create a server with the Swagger API in Python (use [connexion](https://pypi.org/project/connexion/) module).
- **`redoc-preview`**  - Run a server with the Redoc API in the browser. The server is available at [http://localhost:5000](http://localhost:5000).
- **`redoc-html`**  - Generate the documentation from the `src` directory in the `.build directory` in the `html` format with Redocly. The output file is [`.build/index.html`](.build/index.html).
- **`use-yaml`**  - Change the output format to `yaml`. The file will be[.build/openapi.yaml](.build/openapi.yaml).
- **`use-json`**  - Change the output format to `json`. The file will be [`.build/openapi.json`](.build/openapi.json).
- **`start`** - Change the output format to `json`, run the `swagger-docker` command and run the watcher (through `npm run watch`).
- **`stop`** - Stops containers and removes containers

## CI/CD

As mentionned above, you can test the documentation with the `npm test` command.

Once you push your code to the repository, a Github Actions is triggered.

First, the code is tested before creating the documentation.

Then, the Action will build the documentation and push it to the repository ([gh-pages](https://github.com/av1m/uberoo-openapi/tree/gh-pages) branches).
So, the documentation will be available at [av1m.github.io/uberoo-openapi](https://av1m.github.io/uberoo-openapi/).

Finally, the action will push an artifact (openapi.yaml) to the repository.
