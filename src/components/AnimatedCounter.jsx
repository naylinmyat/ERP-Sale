import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }) => {
    return (
        <div className='text-4xl font-semibold ml-4'>
            <CountUp
                end={amount}
            />
        </div>
    )
}

export default AnimatedCounter