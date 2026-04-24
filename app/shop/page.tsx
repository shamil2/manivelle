import { getProducts } from '@/lib/content'
import ShopClient from './shop-client'

export const revalidate = 60

export default function ShopPage() {
  const products = getProducts()
  return <ShopClient products={products} />
}