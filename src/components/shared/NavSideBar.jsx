import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react'
import {
    Bars3Icon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    ShoppingCartIcon,
    ChatBubbleBottomCenterIcon,
    CurrencyDollarIcon,
    ClipboardDocumentListIcon,
    ReceiptPercentIcon
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '/', icon: HomeIcon, current: false },
    { name: 'Customers', href: '/customers', icon: UsersIcon, current: false },
    { name: 'Products', href: '/products', icon: ShoppingCartIcon, current: false },
    { name: 'Quotes', href: '/quotes', icon: ChatBubbleBottomCenterIcon, current: false },
    { name: 'Sales Orders', href: '/sales-orders', icon: ClipboardDocumentListIcon, current: false },
    { name: 'Invoices', href: '/invoices', icon: ReceiptPercentIcon, current: false },
    { name: 'Payments', href: '/payments', icon: CurrencyDollarIcon, current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavSideBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <TransitionChild>
                                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                            </TransitionChild>
                            {/* Sidebar component, swap this element with another sidebar if you like */}
                            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                                <div className="flex h-16 shrink-0 items-center">
                                    <img
                                        alt="Your Company"
                                        src="/assets/images/laconicLogo.png"
                                        className="h-8 w-auto"
                                    />
                                    <p className='text-lg font-bold text-[#2C7EC6] ml-2'>Sales</p>
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {navigation.map((item) => (
                                                    <Link to={item.href}>
                                                        <li key={item.name} className="mt-4">
                                                            <p
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'bg-gray-50 text-[#2C7EC6]'
                                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#2C7EC6]',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                                )}
                                                            >
                                                                <item.icon
                                                                    aria-hidden="true"
                                                                    className={classNames(
                                                                        item.current ? 'text-[#2C7EC6]' : 'text-gray-400 group-hover:text-[#2C7EC6]',
                                                                        'h-6 w-6 shrink-0',
                                                                    )}
                                                                />
                                                                {item.name}
                                                            </p>
                                                        </li>
                                                    </Link>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-4 overflow-y-auto border-r border-gray-200 bg-white px-6">
                        <div className="flex h-16 shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="/assets/images/laconicLogo.png"
                                className="h-8 w-auto"
                            />
                            <p className='text-lg font-bold text-[#2C7EC6] ml-2'>Sales</p>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <Link to={item.href}>
                                                <li key={item.name} className="mt-4">
                                                    <p
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-gray-50 text-[#2C7EC6]'
                                                                : 'text-gray-700 hover:bg-gray-50 hover:text-[#2C7EC6]',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                                                        )}
                                                    >
                                                        <item.icon
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                item.current ? 'text-[#2C7EC6]' : 'text-gray-400 group-hover:text-[#2C7EC6]',
                                                                'h-6 w-6 shrink-0',
                                                            )}
                                                        />
                                                        {item.name}
                                                    </p>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                    <div className="flex flex-grow shrink-0 items-center justify-center mr-">
                        <img
                            alt="Your Company"
                            src="/assets/images/laconicLogo.png"
                            className="h-8 w-auto"
                        />
                        <p className='text-lg font-bold text-[#2C7EC6] ml-2'>Sales</p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default NavSideBar