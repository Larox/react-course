import { createContext } from 'react'

import { ProductInterface, getProducts } from '../api/getProducts'

export const ProductListContext = createContext<ProductInterface[]>(
  await getProducts()
)
