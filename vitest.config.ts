import { defineConfig } from 'vitest/config'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [uni()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['./vitest.setup.ts']
  }
})
