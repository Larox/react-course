import React from 'react'

import { Flex, Box, Spacer, HStack, Link } from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'

import { Cart } from './Cart'

type NavBarElementType = {
  url: string
  displayName: string
}

type BoxElementsProps = {
  listOfElements: NavBarElementType[]
}

const HomeUrl = '/'

const NavBarElements: NavBarElementType[] = [
  { url: HomeUrl, displayName: 'Home' },
  { url: '/cart', displayName: 'Cart' },
]

const BoxElements = ({ listOfElements }: BoxElementsProps): JSX.Element => {
  return (
    <>
      {listOfElements.map((element) => {
        return (
          <Box w="55%">
            <Link as={RLink} to={element.url}>
              {element.displayName}
            </Link>
          </Box>
        )
      })}
    </>
  )
}

export default function NavBar(): JSX.Element {
  return (
    <Box w="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <Flex>
        <Box>
          <Link as={RLink} to={HomeUrl}>
            Easy-Shop
          </Link>
        </Box>
        <Spacer />
        <HStack spacing="12px">
          <BoxElements listOfElements={NavBarElements} />
          <Link as={RLink} to="/cart">
            <Cart />
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}
