import { defineConfig } from '@voidzero-dev/vite-plus'
import { expoManifestRequestHandlerPlugin, metroPlugin } from '@vxrn/vite-plugin-metro'

export default defineConfig({
  plugins: [expoManifestRequestHandlerPlugin(), metroPlugin()],
})
