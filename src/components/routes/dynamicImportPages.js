import { lazy } from "react"

export const dynamicImportPage = (pageName = 'Main') => {
  return lazy(() => import(`src/pages/${pageName}.js`))
}