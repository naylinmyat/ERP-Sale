import React from 'react'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const ProductDetails = () => {
  const { productDetails } = useSelector((store) => store.products)
    return (
        <div>
            <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Product Details</h2>
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            disabled
                            value={productDetails[0].name}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Product Name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="phNo" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Brand
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            disabled
                            value={productDetails[0].brand}
                            id="brand"
                            name="brand"
                            type="text"
                            placeholder="Brand"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Price
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            disabled
                            value={productDetails[0].price}
                            id="price"
                            name="price"
                            type="text"
                            placeholder="$ Price"
                            autoComplete="price"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Status
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            disabled
                            value={productDetails[0].status}
                            id="status"
                            name="status"
                            type="text"
                            placeholder="Available or Not"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <Link to={'/products'}>
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

export default ProductDetails