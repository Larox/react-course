import React from 'react'

import { ProductInterface } from '../api/getProducts'
import { Box, Image, Badge, HStack, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

interface props {
  product: ProductInterface
}

export const ProductCard = ({ product }: props): JSX.Element => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <HStack spacing={[7, 10, 10]}>
        <Box p="2">
          <Image
            borderRadius="lg"
            objectFit="cover"
            boxSize={[100, 150, 150]}
            src={product.image}
          />
        </Box>
        <Box p={[2, 5, 5]}>
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {product.title}
          </Box>
          <Box>
            {product.price}
            <Box as="span" color="gray.600" fontSize="sm">
              / unit
            </Box>
          </Box>
          <Box display="flex" mt="2" alignItems="center">
            {product.category}
          </Box>
        </Box>
      </HStack>
      <Text fontSize="sm" lineHeight="tight" noOfLines={[1, 2, 3]}>
        {product.description}
      </Text>
    </Box>
  )
}
