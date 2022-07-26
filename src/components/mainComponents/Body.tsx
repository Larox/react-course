import React from 'react'

import { Flex } from '@chakra-ui/react'

type BodyProps = {
  content: JSX.Element
}

export default function Body(props: BodyProps): JSX.Element {
  return <Flex minHeight="100vh">{props.content}</Flex>
}
