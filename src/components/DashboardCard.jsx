import React from 'react'
import AnimatedCounter from './AnimatedCounter'

const DashboardCard = ({ item,iconBgColor,title,count }) => {
    return (
        <div className="overflow-hidden w-[175px] rounded-lg bg-white shadow">
            <div className="px-2 py-3 sm:p-4">
                <div className='flex items-center'>
                    <div className={'p-3 w-min rounded-xl ' + `${iconBgColor}`}>
                        <item.icon
                            aria-hidden="true"
                            className='text-white h-6 w-6 shrink-0'
                        />
                    </div>
                    <AnimatedCounter 
                        amount={count}
                    />
                </div>
                <p className='text-lg mt-4'>{title}</p>
            </div>
        </div>
    )
}

export default DashboardCard