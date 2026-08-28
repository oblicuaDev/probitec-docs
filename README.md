# Oblicua RFID — Documentación

Manual de uso de la app móvil (TC22) y la plataforma web de Oblicua RFID, para presentación a cliente y capacitación de usuarios. Construido con [Docusaurus](https://docusaurus.io/).

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

El sitio se publica automáticamente en **GitHub Pages** con cada push a `main`,
mediante el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

URL: https://oblicuadev.github.io/probitec-docs/

Requisito único (una sola vez): en el repo, **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Despliegue manual alternativo (empuja el build al branch `gh-pages`):

```bash
GIT_USER=<tu usuario de GitHub> npm run deploy
```
