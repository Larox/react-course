import React, { useContext, useEffect, useState } from 'react'

import { SimpleGrid, Center } from '@chakra-ui/react'

import { ProductListContext } from '../context/ProductListContext'
import { ProductCard } from './ProductCard'
import PageLayout from './mainComponents/PageLayout'
import { getProducts, ProductInterface } from '../api/getProducts'

export function ProductsPage(): JSX.Element {
  const productsListCtx = useContext(ProductListContext)
  return (
    <SimpleGrid minChildWidth="500px" spacing={5}>
      {productsListCtx.map((product) => (
        <>
          <Center>
            <ProductCard product={product} />
          </Center>
        </>
      ))}
    </SimpleGrid>
  )
}

export default function f(): JSX.Element {
  const [productsList, setProductsList] = useState<ProductInterface[]>([])
  useEffect(() => {
    getProducts().then((products) => setProductsList(products))
  }, [])
  return (
    <ProductListContext.Provider value={productsList}>
      <PageLayout body={<ProductsPage />} />
    </ProductListContext.Provider>
  )
}
