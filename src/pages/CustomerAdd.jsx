import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { addCus } from '../Features/CustomersSlice'

const CustomerAdd = () => {
    const [name, setName] = useState('')
    const [phNo, setPhNo] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('Male')
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleAddCus = (event) => {
        if (name === '' || phNo === '' || email === '') {
            Swal.fire({
                title: "Warning",
                text: "You need to fill complete",
                icon: "warning"
            });
        } else {
            event.preventDefault();
            dispatch(addCus({ name, gender, email, phNo }))
            navigate('/customers')
        }
    }

    return (
        <div>
            <h2 className='text-2xl font-semibold text-[#2C7EC6] mb-6'>Customer Add</h2>
            <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Name
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            placeholder="Name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="phNo" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        PhoneNo.
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            id="phNo"
                            name="phNo"
                            type="text"
                            placeholder="Phone Number"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={e => setPhNo(e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Email address
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                    <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                        Gender
                    </label>
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                        <select
                            id="gender"
                            name="gender"
                            autoComplete="gender"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#2C7EC6] sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={e => setGender(e.target.value)}
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                <Link to={'/customers'}>
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Back
                    </button>
                </Link>
                <button
                    type="submit"
                    className="rounded-md bg-[#2C7EC6] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#266dab] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleAddCus}
                >
                    Add Customer
                </button>
            </div>
        </div>
    )
}

export default CustomerAdd