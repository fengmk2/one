import { defineConfig } from '@voidzero-dev/vite-plus'

export default defineConfig({
  test: {
    include: ['./tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    globalSetup: '@vxrn/test/setup',
  },
})
