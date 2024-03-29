import React from 'react'

import {
  Box,
  Flex,
  HStack,
  ListItem,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'

export default function Footer(): JSX.Element {
  // Abstract elements from this element on "utils" that can contain grids related
  // to the design specified
  return (
    <Box marginTop="auto" p="4">
      <VStack>
        <Flex>
          <HStack>
            <VStack>
              <UnorderedList>
                <ListItem>Foo</ListItem>
                <ListItem>Bar</ListItem>
              </UnorderedList>
            </VStack>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  )
}
