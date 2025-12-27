import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  test: {
    globalSetup: '@vxrn/test/setup',
    retry: 1,
    fileParallelism: false,
    testTimeout: 30000,
    hookTimeout: 30000,
  },
})
