import React from 'react'

import { Box } from '@chakra-ui/react'

type BodyProps = {
  content: JSX.Element
}

export default function Body(props: BodyProps): JSX.Element {
  return (
    <Box minHeight="100vh" minW="100vw" p={10}>
      {props.content}
    </Box>
  )
}
