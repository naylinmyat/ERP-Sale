import React from 'react'
import CustomersTable from '../components/CustomersTable'
import { useSelector } from 'react-redux'

const Customers = () => {
  const { customersList } = useSelector((store) => store.customers)
  return (
    <>
    <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Customers</h2>
    <div>
      <CustomersTable customersList={customersList} />
    </div>
    </>
  )
}

export default Customers