import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// import your mock.ts
// you can import only one file if you use vite.mock.config.ts
// aslo can import.meta.glob to import all files
import testModule from '../mock/test'

// eslint-disable-next-line import/prefer-default-export
export function setupProdMockServer() {
  createProdMockServer([...testModule])
}
