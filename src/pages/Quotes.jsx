import React from 'react'
import { useSelector } from 'react-redux'
import QuotesTable from '../components/QuotesTable'

const Quotes = () => {
  const { quotesList } = useSelector((store) => store.quotes)
  return (
    <>
    <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Quotes</h2>
    <div>
      <QuotesTable quotesList={quotesList} />
    </div>
    </>
  )
}

export default Quotes