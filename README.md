# qyj-lib-vue pack by Vite

## Css

### Auto import (Vite-only)

`npm i -D vite-plugin-style-import`

#### vite.config.js

```
  import { createStyleImportPlugin } from 'vite-plugin-style-import'
  ...
    plugins: [
      ...
      createStyleImportPlugin({
        libs: [
          {
            libraryName: 'qyj-lib-vue',
            esModule: true,
            resolveStyle: (name) => {
              return `qyj-lib-vue/dist/components/${name}/index.css`
            },
          },
        ],
      })
    ...
  ]

```

### Global import(universal)

`import 'qyj-lib-vue/dist/style.css`

#### TODO: Vitest; storybook
