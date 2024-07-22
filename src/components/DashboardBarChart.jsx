import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, CategoryScale, BarElement } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale, BarElement);

const BarChart = ({ quotes,salesOrders,invoices }) => {
    const data = {
        labels: [
            'Quotes',
            'Sales Orders',
            'Invoices'
        ],
        datasets: [{
            label: 'Count',
            data: [quotes, salesOrders, invoices],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgb(54, 162, 235)',
                'rgb(201, 203, 207)',
                'rgb(75, 192, 192)'
            ],
            borderWidth: 1
        }]
    }

    return <Bar
        data={data}
        options={{
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            }
        }}
    />
}

export default BarChart