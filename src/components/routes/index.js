import { dynamicImportPage } from "./dynamicImportPages";

export const routes = [
  { id: 1, name: 'main', path: '/', Component: dynamicImportPage('Main') },
  { id: 2, name: 'current', path: '/dishes/:id', Component: dynamicImportPage('DetailProduct') }
]