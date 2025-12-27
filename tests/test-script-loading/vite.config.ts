import { one } from 'one/vite'
import type { UserConfig } from '@voidzero-dev/vite-plus'

export default {
  plugins: [
    one({
      config: {
        tsConfigPaths: {
          ignoreConfigErrors: true,
        },
      },
      web: {
        defaultRenderMode: 'ssg',
        experimental_scriptLoading: 'after-lcp',
      },
    }),
  ],
} satisfies UserConfig
