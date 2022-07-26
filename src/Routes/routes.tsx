import React from 'react'

import { Route } from 'react-router-dom'
import { Cart } from '../components/mainComponents/Cart'
import ProductsPage from '../components/ProductsPage'

export default [
  <Route path="/" element={<ProductsPage />} />,
  <Route path="/cart" element={<Cart />} />,
]
