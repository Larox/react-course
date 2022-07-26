import React from 'react'

import { Route } from 'react-router-dom'
import { ProductCard } from '../components/ProductCard'
import { NavBar } from '../components/NavBar'

export default [
  <Route path="/" element={<ProductCard />} />,
  <Route path="/foo" element={<NavBar />} />,
]
