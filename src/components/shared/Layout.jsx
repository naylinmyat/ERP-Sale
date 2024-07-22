import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSideBar from './NavSideBar'

const Layout = () => {
    return (
        <div className="lg:bg-neutral-100 h-screen w-screen flex flex-col lg:flex-row">
            <NavSideBar />
            <div className="flex flex-col flex-1">
                <div className="flex-1 p-4 min-h-0 overflow-auto lg:ml-72">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout