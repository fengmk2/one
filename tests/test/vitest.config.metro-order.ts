import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  test: {
    include: ['tests/metro-startup-order.test.ts'],
    testTimeout: 90000,
    hookTimeout: 90000,
  },
})
