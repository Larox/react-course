import React from 'react'

import { Grid, GridItem } from '@chakra-ui/react'

import { ProductCard } from './ProductCard'
import PageLayout from './mainComponents/PageLayout'

export function ProductsPage(): JSX.Element {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10}>
      {[...Array(10).keys()].map((_) => (
        <>
          <GridItem>
            <ProductCard />
          </GridItem>
        </>
      ))}
    </Grid>
  )
}

export default function f(): JSX.Element {
  return <PageLayout body={<ProductsPage />} />
}
