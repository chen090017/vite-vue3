import vue from '@vitejs/plugin-vue'
 import UnoCSS from 'unocss/vite'
import {visualizer} from 'rollup-plugin-visualizer'

 
export function createVitePlugins(viteEnv:any, isBuild:any) {
   const plugins = [
    vue(),
    UnoCSS({})
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
