# @alwynou/eslint-config [![npm](https://img.shields.io/npm/v/@alwynou/eslint-config.svg)](https://npmjs.com/package/@alwynou/eslint-config)

Flat ESLint config for JavaScript, TypeScript, Vue 2, Vue 3, Prettier.

## Features

- Support Vue 2 and 3 out-of-box.
- Select the required file types as needed.
- Support JSON(5), YAML, Markdown...

## Install

```bash
npm i -D @alwynou/eslint-config
```

## Usage

> In VScode should add config: `eslint.experimental.useFlatConfig: true` current.

```js
// eslint.config.js
import { all } from '@alwynou/eslint-config'

export default defineFlatConfig(all)
```

### Custom Config

```js
import { alwynou } from '@alwynou/eslint-config'
export default alwynou(
  [
    /* your custom config */
  ],
  { vue: true, prettier: true, markdown: true }
)
```

## License

[MIT](./LICENSE) License © 2021-PRESENT [Alwyn Ou](https://github.com/alwynou)
