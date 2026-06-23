# Webpack Starter

Simple Webpack starter template with Babel, CSS support and development server already configured.

## Features

- Webpack 5
- Babel (`@babel/preset-env`)
- CSS support
- Hot Module Replacement (HMR)
- Webpack Dev Server
- HTML template generation
- Production CSS extraction

## Installation

```bash
npm install
```

## Development

Start development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

Output files will be generated in the `dist` directory.

## Included Packages

- webpack
- webpack-cli
- webpack-dev-server
- babel-loader
- @babel/core
- @babel/preset-env
- css-loader
- style-loader
- mini-css-extract-plugin
- html-webpack-plugin