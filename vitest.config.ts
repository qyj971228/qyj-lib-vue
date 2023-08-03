import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['src/**/__test__/*.spec.ts'],
      environment: 'happy-dom'
    }
  })
)
