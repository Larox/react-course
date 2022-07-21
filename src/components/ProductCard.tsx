import React from 'react'
import { Box, Image, Badge, HStack, Text } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

export const ProductCard = (): JSX.Element => {
  const product = {
    imgSrc: 'https://picsum.photos/id/777/180',
    price: 23.1,
    currency: 'USD',
    discount: '10%',
    name: 'Foo Bar est ist',
    rating: 3,
    reviewCount: 10,
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <HStack spacing={[7, 10, 10]}>
        <Box p="2">
          <Image
            borderRadius="lg"
            objectFit="cover"
            boxSize={[100, 150, 150]}
            src={product.imgSrc}
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
            {product.name}
          </Box>
          <Box>
            {product.price}
            <Box as="span" color="gray.600" fontSize="sm">
              {' '}
              / unit{' '}
            </Box>
          </Box>
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < product.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
          </Box>
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {product.reviewCount} reviews
          </Box>
        </Box>
      </HStack>
      <Text fontSize="sm" lineHeight="tight" noOfLines={[1, 2, 3]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        ornare mattis lacinia. Aenean et tincidunt lorem. In quis bibendum eros.
        Suspendisse consequat urna a ultricies semper. Donec sed risus vel ipsum
        eleifend feugiat in eu erat. Nam tristique tortor sem, ac lobortis
        tellus malesuada nec. Phasellus eu sollicitudin augue. Sed dignissim
        iaculis sodales. Sed augue dolor, malesuada et lacinia quis, ornare ut
        elit. Aliquam at hendrerit magna, eget auctor purus. Proin non erat
        posuere, convallis nulla quis, sollicitudin lorem.
      </Text>
    </Box>
  )
}
