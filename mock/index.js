import { createProdMockServer } from 'vite-plugin-mock/client'

const modules = import.meta.globEager('./modules/*.js')
const mockModules = []
Object.keys(modules).forEach((key) => {
  mockModules.push(...modules[key].default)
})

export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
