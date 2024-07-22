import React from 'react'
import { useSelector } from 'react-redux'
import SalesOrdersTable from '../components/SalesOrdersTable'

const SalesOrders = () => {
  const { salesOrdersList } = useSelector((store) => store.salesOrders)
  return (
    <>
    <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Sales Orders</h2>
    <div>
      <SalesOrdersTable salesOrdersList={salesOrdersList} />
    </div>
    </>
  )
}

export default SalesOrders