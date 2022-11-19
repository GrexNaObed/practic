import { dynamicImportPage } from "./dynamicImportPages";

export const routes = [
  { id: 1, name: 'main', path: '/', Component: dynamicImportPage('Main') }
]