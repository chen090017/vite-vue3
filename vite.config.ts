import { defineConfig,loadEnv } from 'vite'
import path from 'path'
import { createVitePlugins } from './build/plugins'
 // https://vitejs.dev/config/
export default defineConfig(({ command, mode }) =>{
  const viteEnv = loadEnv(mode, process.cwd()) ;
  const isBuild = command === 'build'

  return{
    plugins: createVitePlugins(viteEnv,isBuild),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    css: {
      preprocessorOptions: {
        //define global scss variable
        scss: {
          additionalData: `@use '@/styles/scss/global.scss' as *;@use '@/styles/element/index.scss' as *;  `,
        },
      },
    },
    server: {
      host: '0.0.0.0',  // 默认为'127.0.0.1'，如果将此设置为 `0.0.0.0` 或者 `true` 将监听所有地址，包括局域网和公网地址
      port: 3200,  // 端口
     }
   
  }
    
})
