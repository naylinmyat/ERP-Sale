import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const PaymentDetails = () => {
    const { paymentDetails } = useSelector((store) => store.payments)
    return (
      <div>
        <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Payment Details</h2>
        <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="tId" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Transaction ID
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                disabled
                value={paymentDetails[0].tId}
                id="tId"
                name="tId"
                type="text"
                placeholder="Transaction ID"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="invoice" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Invoice
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                disabled
                value={paymentDetails[0].iId}
                id="invoice"
                name="invoice"
                type="text"
                placeholder="Invoice"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="createdAt" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Payment Date
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                disabled
                value={paymentDetails[0].paymentDate}
                id="createdAt"
                name="createdAt"
                type="text"
                placeholder="dd/mm/yyyy"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Payment Type
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                disabled
                value={paymentDetails[0].paymentType}
                id="type"
                name="type"
                type="text"
                placeholder="Payment Type"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
  
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="amont" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
              Amont
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <input
                disabled
                value={paymentDetails[0].amount}
                id="amont"
                name="amont"
                type="text"
                placeholder="$ Amount"
                autoComplete="price"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <Link to={'/payments'}>
            <button
              type="submit"
              className="rounded-md bg-[#2C7EC6] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#266dab] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back
            </button>
          </Link>
        </div>
      </div>
    )
}

export default PaymentDetails