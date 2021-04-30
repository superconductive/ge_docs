# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## System Requirements

https://docusaurus.io/docs/installation#requirements

## Installation

From the repo root run:

```console
yarn install
```

## Local Development

For the fastest dev loop, this command starts a local development server and open up the compiled site in a browser window. Most changes are reflected live without having to restart the server.

```console
yarn start
```

## Build

To build a static version of the site, this command generates static content into the `build` directory. This can be served using any static contents hosting service.

```console
yarn build
```

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Linting

[standard.js](https://standardjs.com/) is used to lint the project.

```console
yarn lint
```
