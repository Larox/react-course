import React from 'react'

import { Box, Grid, GridItem } from '@chakra-ui/react'

import NavBar from './NavBar'
import Body from './Body'
import Footer from './Footer'

type LayoutProps = {
  body: JSX.Element
}

export default function PageLayout({ body }: LayoutProps): JSX.Element {
  return (
    <Grid templateRows="repeat(3, auto)" gap={3}>
      <GridItem rowSpan={1}>
        <NavBar />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Body content={body} />
      </GridItem>
      <GridItem rowSpan={1}>
        <Footer />
      </GridItem>
    </Grid>
  )
}
