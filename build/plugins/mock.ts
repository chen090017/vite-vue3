import { viteMockServe } from 'vite-plugin-mock'

export function configMockPlugin() {
  return viteMockServe({
    mockPath: 'mock/modules',//↓解析根目录下的mock文件夹
    watchFiles: true,// 监视文件更改
    enable: true // true-启用 false-停用
  })
}
