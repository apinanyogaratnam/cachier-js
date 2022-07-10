# Cachier JS

A javascript library for interacting with a self-hosted cachier service.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Install package with npm:

```sh
npm install cachier-js
```

Install package with yarn:

```sh
yarn add cachier-js
```

Install package with pnpm:

```sh
pnpm add cachier-js
```

## Usage

```js
import Cachier from 'cachier-js';

const client = new Cachier('http://localhost:8000');

const setCache = async (key, value, expiry) => {
    const response = await client.set(key, value, expiry);
    console.log(response);
}

const getCache = async (key) => {
    const response = await client.get(key);
    console.log(response);
}

setCache('key', 'value', 1000);
getCache('key');
```

## Support

Please [open an issue](https://github.com/apinanyogaratnam/cachier-js/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/apinanyogaratnam/cachier-js/compare/).
