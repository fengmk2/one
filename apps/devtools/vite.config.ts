import type { UserConfig } from '@voidzero-dev/vite-plus'
import { one } from 'one/vite'

export default {
  plugins: [
    one({
      web: {
        defaultRenderMode: 'spa',
      },
    }),
  ],
} satisfies UserConfig
