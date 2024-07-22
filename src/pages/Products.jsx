import React from 'react'
import ProductsTable from '../components/ProductsTable'
import { useSelector } from 'react-redux'

const Products = () => {
  const { productsList } = useSelector((store) => store.products)
  return (
    <>
      <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Products</h2>
      <div>
        <ProductsTable productsList={productsList} />
      </div>
    </>
  )
}

export default Products