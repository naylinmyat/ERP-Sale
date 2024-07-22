import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ openCount,closeCount }) => {
    const data = {
        labels: [
            'Open',
            'Cancelled'
        ],
        datasets: [{
            label: 'Count',
            data: [openCount, closeCount],
            backgroundColor: [
                'rgb(111,217,67)',
                'rgb(63,201,214)'
            ],
            hoverOffset: 4
        }]
    }

    return <Doughnut
        data={data}
        options={{
            cutout: '70%',
        }}
    />
}

export default DoughnutChart