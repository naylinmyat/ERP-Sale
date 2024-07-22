import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ orange, green, blue, isGender }) => {
    const data = {
        labels: isGender ? [
            'Male',
            'Female',
            'Others'
        ] :
            [
                'Paid',
                'Open',
                'Cancelled'
            ],
        datasets: [{
            label: 'Count',
            data: [orange, green, blue],
            backgroundColor: [
                'rgb(255,161,29)',
                'rgb(111,217,67)',
                'rgb(63,201,214)'
            ],
            hoverOffset: 4
        }]
    }

    return <Pie
        data={data}
    />
}

export default PieChart