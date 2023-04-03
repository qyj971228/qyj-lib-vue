import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
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
    vueJsxPlugin(),
    dts({
      entryRoot: './src/lib',
      outputDir: ['./dist'],
      tsConfigFilePath: './tsconfig.json'
    }),
  ]
})
