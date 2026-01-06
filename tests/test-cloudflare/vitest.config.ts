import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  test: {
    globalSetup: './setup.ts',
    include: ['tests/**/*.test.ts'],
    fileParallelism: false,
    testTimeout: 60000,
    hookTimeout: 60000,
  },
})
