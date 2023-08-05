import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
export default defineConfig({
  build: {
    outDir: 'es',
    rollupOptions: {
      external: ['vue'],
      input: ['src/lib/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: 'dist'
        }
      ]
    },
    lib: {
      entry: 'src/lib/index.ts'
    }
  },
  plugins: [
    vue(),
    // vueJsxPlugin(),
    dts({
      outDir: ['dist'],
      tsconfigPath: './tsconfig.dts.json'
    }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'qyj-lib-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `qyj-lib-vue/dist/components/${name}/index.css`
          }
        }
      ]
    })
  ]
})
