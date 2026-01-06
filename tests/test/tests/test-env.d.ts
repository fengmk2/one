import type { TestInfo } from '@vxrn/test'

declare module '@voidzero-dev/vite-plus/test' {
  export interface ProvidedContext {
    testInfo: TestInfo
  }
}
