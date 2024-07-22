import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { deleteInvoice, invoiceDetails, invoiceEdit } from '../Features/InvoicesSlice'
import { Link, useNavigate } from "react-router-dom"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const statuses = { paid: 'text-orange-400 bg-orange-400/10', open: 'text-green-400 bg-green-400/10', cancelled: 'text-rose-400 bg-rose-400/10' }

const InvoicesTable = ({ invoicesList }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDetailsInvoice = ( invoice ) => {
        dispatch(invoiceDetails({ invoice }))
        navigate('/invoices/details')
    }

    const handleEditInvoice = ( invoice ) => {
        dispatch(invoiceEdit({ invoice }))
        navigate('/invoices/edit')
    }

    const handleDeleteInvoice = ( iId ) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this Invoice?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteInvoice({ iId }));
            }
        });
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <p className="mt-2 text-xl font-semibold text-gray-700">
                        A list of all invoices.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <Link to={'/invoices/add'}>
                        <button
                            type="button"
                            className="block rounded-md bg-[#2C7EC6] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#266dab] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C7EC6]"
                        >
                            Add Invoice
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full border-separate border-spacing-0">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                    >
                                        Invoice ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                    >
                                        Customer Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                    >
                                        Created At
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                    >
                                        Amount
                                    </th>
                                    <th
                                        scope="col"
                                        className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                                    >
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {invoicesList.map((invoice, invoiceIdx) => (
                                    <tr key={invoice.qId}>
                                        <td
                                            className={classNames(
                                                invoiceIdx !== invoicesList.length - 1 ? 'border-b border-gray-200' : '',
                                                'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                            )}
                                        >
                                            {invoice.iId}
                                        </td>
                                        <td
                                            className={classNames(
                                                invoiceIdx !== invoicesList.length - 1 ? 'border-b border-gray-200' : '',
                                                'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                            )}
                                        >
                                            {invoice.customerName}
                                        </td>
                                        <td
                                            className={classNames(
                                                invoiceIdx !== invoicesList.length - 1 ? 'border-b border-gray-200' : '',
                                                'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell',
                                            )}
                                        >
                                            <div className='flex items-center gap-x-2'>
                                                <div className={classNames(statuses[invoice.status], 'flex-none rounded-full p-1')}>
                                                    <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                                </div>
                                                {invoice.status}
                                            </div>
                                        </td>
                                        <td
                                            className={classNames(
                                                invoiceIdx !== invoicesList.length - 1 ? 'border-b border-gray-200' : '',
                                                'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                            )}
                                        >
                                            {invoice.createdAt}
                                        </td>
                                        <td
                                            className={classNames(
                                                invoiceIdx !== invoicesList.length - 1 ? 'border-b border-gray-200' : '',
                                                'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                            )}
                                        >
                                            {invoice.amount}
                                        </td>
                                        <td
                                            className={classNames(
                                                invoiceIdx !== invoicesList.length - 1 ? 'border-b border-gray-200' : '',
                                                'relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8',
                                            )}
                                        >
                                            <button onClick={() => handleDetailsInvoice(invoice)} className="text-[#48c62c] hover:text-[#48ab26] mr-5">
                                                Details
                                            </button>
                                            <button onClick={() => handleEditInvoice(invoice)} className="text-[#2C7EC6] hover:text-[#266dab] mr-5">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDeleteInvoice(invoice.iId)} className="text-[#c62c2c] hover:text-[#ab2626]">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoicesTable