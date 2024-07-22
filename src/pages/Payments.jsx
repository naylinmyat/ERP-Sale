import React from 'react'
import { useSelector } from 'react-redux'
import PaymentsTable from '../components/PaymentsTable'

const Payments = () => {
  const { paymentsList } = useSelector((store) => store.payments)
  return (
    <>
    <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Payments</h2>
    <div>
      <PaymentsTable paymentsList={paymentsList} />
    </div>
    </>
  )
}

export default Payments