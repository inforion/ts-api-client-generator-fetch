# Fetch Adapter for ts-api-client-generator

[![NPM version](https://img.shields.io/npm/v/ts-api-client-generator-fetch.svg)](https://www.npmjs.com/package/ts-api-client-generator-fetch)

## Description

An adapter that makes HTTP requests for [ts-api-client-generator](https://github.com/inforion/ts-api-client-generator)
via [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Please see [ts-api-client-generator](https://github.com/inforion/ts-api-client-generator) docs to learn how to use instantiated adapters.

## Installation

Install this package and its peer dependency using NPM:

```
npm install ts-api-client-generator-fetch ts-api-client-generator
```

or using Yarn:

```
yarn add ts-api-client-generator-fetch ts-api-client-generator
```

## Instantiate

```ts
import FetchAdapter from 'ts-api-client-generator-fetch'

const adapter = new FetchAdapter</* optional, type of context */>({
    transformResponse: /* optional function, for details please see ts-api-client-generator docs */
})
```