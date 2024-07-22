import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { sloUpdate } from '../Features/SalesOrdersSlice'
import { useSelector } from 'react-redux'

const SalesOrderEdit = () => {
  const { salesOrderEdit } = useSelector((store) => store.salesOrders)
  const [soId, setSoId] = useState(salesOrderEdit[0].soId)
  const [soName, setSoName] = useState(salesOrderEdit[0].soName)
  const [status, setStatus] = useState(salesOrderEdit[0].status)
  const [createdAt, setCreatedAt] = useState(salesOrderEdit[0].createdAt)
  const [amount, setAmount] = useState(salesOrderEdit[0].amount)
  const [customerName, setCustomerName] = useState(salesOrderEdit[0].customerName)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleUpdateQuote = (event) => {
    if (soId === '' || soName === '' || createdAt === '' || amount === '' || customerName === '') {
      Swal.fire({
        title: "Warning",
        text: "You need to fill complete",
        icon: "warning"
      });
    } else {
      event.preventDefault();
      dispatch(sloUpdate({ soId, soName, status, createdAt, amount, customerName }))
      navigate('/sales-orders')
    }
  }

  return (
    <div>
      <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Sales Order Edit</h2>
      <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label htmlFor="sloId" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
            Quote ID
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <input
              disabled
              value={soId}
              onChange={e => setSoId(e.target.value)}
              id="sloId"
              name="sloId"
              type="text"
              placeholder="SLO ID"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
            Name
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <input
              onChange={e => setSoName(e.target.value)}
              value={soName}
              id="name"
              name="name"
              type="text"
              placeholder="Quote Name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
            Status
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <select
              id="status"
              value={status}
              name="status"
              autoComplete="status"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={e => setStatus(e.target.value)}
            >
              <option>open</option>
              <option>cancelled</option>
            </select>
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label htmlFor="createdAt" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
            Created At
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <input
              onChange={e => setCreatedAt(e.target.value)}
              value={createdAt}
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
          <label htmlFor="amont" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
            Amount
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <input
              onChange={e => setAmount(e.target.value)}
              value={amount}
              id="amont"
              name="amont"
              type="text"
              placeholder="$ Amount"
              autoComplete="price"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
          <label htmlFor="cusName" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
            Customer Name
          </label>
          <div className="mt-2 sm:col-span-2 sm:mt-0">
            <input
              onChange={e => setCustomerName(e.target.value)}
              value={customerName}
              id="cusName"
              name="cusName"
              type="text"
              placeholder="Customer Name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <Link to={'/sales-orders'}>
          <button
            type="submit"
            className="rounded-md bg-[#2C7EC6] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#266dab] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back
          </button>
        </Link>
        <button
          type="submit"
          className="rounded-md bg-[#2C7EC6] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#266dab] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleUpdateQuote}
        >
          Update Sales Order
        </button>
      </div>
    </div>
  )
}

export default SalesOrderEdit