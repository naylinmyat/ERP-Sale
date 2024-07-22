import React from 'react'
import { useSelector } from 'react-redux'
import InvoicesTable from '../components/InvoicesTable'

const Invoices = () => {
  const { invoicesList } = useSelector((store) => store.invoices)
  return (
    <>
    <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Invoices</h2>
    <div>
      <InvoicesTable invoicesList={invoicesList} />
    </div>
    </>
  )
}

export default Invoices