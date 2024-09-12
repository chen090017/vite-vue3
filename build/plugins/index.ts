import vue from '@vitejs/plugin-vue'
 import {visualizer} from 'rollup-plugin-visualizer'
import { unocss } from './unocss'

 
export function createVitePlugins(viteEnv:any, isBuild:any) {
   const plugins = [
    vue(),
    unocss()
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
 
  return plugins
}
