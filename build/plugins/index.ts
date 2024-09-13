import vue from '@vitejs/plugin-vue'
 import {visualizer} from 'rollup-plugin-visualizer'
import { unocss } from './unocss'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { configMockPlugin } from './mock'


export function createVitePlugins(viteEnv:any, isBuild:any) {
   const plugins = [
    vue(),
    unocss(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: "sass",
       })],
    }),
   ]
   if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }
  if (true) {
    plugins.push(configMockPlugin())
  }
  return plugins
}
