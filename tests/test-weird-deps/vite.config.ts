import { one } from 'one/vite'
import type { UserConfig } from '@voidzero-dev/vite-plus'

export default {
  plugins: [
    one({
      deps: {
        '@rn-primitives/slot': {
          '**/*.mjs': ['jsx'],
        },
      },
    }),
  ],
} satisfies UserConfig
