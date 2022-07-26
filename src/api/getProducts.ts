export interface ProductInterface {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

type GetProducts = () => Promise<ProductInterface[]>

export const getProducts: GetProducts = async () => {
  const resp = await fetch('https://fakestoreapi.com/products')
  const products = await resp.json()
  return products
}
