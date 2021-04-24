# Multimedia Visualization Platform

The Multimedia Visualization Platform (MVP) is written by using [Electron](https://github.com/electron/electron), [React](https://github.com/facebook/react) and [Redux](https://github.com/reduxjs/redux).

## **In development...**

## Download

Get the app from the [releases page](https://github.com/TMD44/mvp/releases).

## Setup

Install [Node.JS, NPM](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/en/docs/install), if you haven't already.

```bash
# Clone Repository
git clone https://github.com/TMD44/mvp
cd mvp

# Install dependencies with Yarn
yarn

# Run developement build
yarn start

# Run production build
yarn build

# Create production build
yarn package
```

## Advenced options

```bash
# Run tests
yarn test

# Run with analyzer (opens treemap of the build)
OPEN_ANALYZER=true yarn build

# Create production build
#   Platform: --win / -w, --linux / -l, --mac / -m
#   All platforms: -mwl
yarn package --[option]

# Debugging in production build
yarn cross-env DEBUG_PROD=true yarn build
yarn cross-env DEBUG_PROD=true yarn start

# Debugging in production build and create package
yarn cross-env DEBUG_PROD=true yarn package

# Clean temp files
yarn clean
yarn clean:all
```

## Frameworks, Boilerplates and Libraries

The following were also used in development:

-   [Electron-React-Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
-   [Material UI](https://github.com/mui-org/material-ui)
