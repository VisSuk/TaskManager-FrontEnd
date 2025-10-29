import React, { useEffect, useState } from 'react'
import { getUserTasksApi } from '../services/allApi'
import { getTaskCounts } from '../functions/taskCounts'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { getFormattedDate } from '../functions/formattedDate';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);


function Statistics({userDetails}) {

    const [token, setToken] = useState("")
    const [allTasks, setAllTasks] = useState([])
    const [taskCounts, setTaskCounts] = useState({
        all: 0,
        pending: 0,
        inprogress: 0,
        completed: 0,
        high:0,
        medium:0,
        low:0
    })
    // console.log(taskCounts)
    // console.log(userDetails)
    

    const date = new Date()
    const dateFormatter_Arguement = date.toISOString()
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' })

    const getTimeOfDayGreeting = () => {
        const hour = date.getHours();

        if (hour >= 5 && hour < 12) {
            return "Good Morning";
        } else if (hour >= 12 && hour < 17) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    const getFirstName = () => {

    }
    

    const getUserTasks = async () => {

        const reqHeader = { "Authorization": `Bearer ${token}` }
        const result = await getUserTasksApi(reqHeader)
        // console.log(result.data)
        setAllTasks(result.data)
        const counts = getTaskCounts(result.data)
        setTaskCounts(counts)

    }

    const pieChartData = {
        labels: ['Pending', 'In Progress', 'Completed'],
        datasets: [
            {
                label: 'Tasks',
                data: [taskCounts?.pending, taskCounts?.inprogress, taskCounts?.completed],
                backgroundColor: [
                    'rgba(109, 40, 217, 0.7)',
                    'rgba(96, 165, 250, 0.7)',
                    'rgba(34, 197, 94, 0.2)',
                ],
                borderColor: [
                    'rgba(109, 40, 217, 1)',
                    'rgba(96, 165, 250, 1)',
                    'rgba(34, 197, 94, 1)',
                ],
                borderWidth: 4,
            },
        ],
    };

    const barChartData = {
        labels: ['High', 'Medium', 'Low'], 
        datasets: [
            {
                label: 'Task Priorities',
                data: [taskCounts.high, taskCounts.medium, taskCounts.low], 
                backgroundColor: [
                    'rgba(253, 68, 68, 1)',
                    'rgba(251, 146, 60, 1)',
                    'rgba(250, 204, 21, 1)',  
                ],

            },
        ],
    };

    const barChartOptions = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,

            },
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };


    useEffect(() => {
        setToken(sessionStorage.getItem("token"))
    }, [])

    useEffect(() => {
        if (token) {
            getUserTasks()
        }
    }, [token])


    return (
        <>

            <div className='md:mx-5 my-8 p-7'>
                <h1 className='text-2xl font-semibold'> <span>{getTimeOfDayGreeting()}</span> , <span>{userDetails.username}</span> </h1>
                <h2 className='mt-1'> <span>{dayOfWeek}</span>, <span>{getFormattedDate(dateFormatter_Arguement)}</span> </h2>
                <div className='md:grid grid-cols-4 gap-4 mt-4 py-3'>
                    <div className='flex md:justify-center'>
                        <div className='px-1 rounded bg-blue-700'></div>
                        <p className='ms-3 text-lg text-gray-500'> <span className='font-semibold text-xl text-gray-700'>{taskCounts?.all}</span> Total Tasks</p>
                    </div>
                    <div className='flex md:justify-center mt-3 md:mt-0'>
                        <div className='px-1 rounded bg-violet-700'></div>
                        <p className='ms-3 text-lg text-gray-500'> <span className='font-semibold text-xl text-gray-700'>{taskCounts?.pending}</span> Pending</p>
                    </div>
                    <div className='flex md:justify-center mt-3 md:mt-0'>
                        <div className='px-1 rounded bg-blue-400'></div>
                        <p className='ms-3 text-lg text-gray-500'> <span className='font-semibold text-xl text-gray-700'>{taskCounts?.inprogress}</span> In Progress</p>
                    </div>
                    <div className='flex md:justify-center mt-3 md:mt-0'>
                        <div className='px-1 rounded bg-green-500'></div>
                        <p className='ms-3 text-lg text-gray-500'> <span className='font-semibold text-xl text-gray-700'>{taskCounts?.completed}</span> Completed</p>
                    </div>
                </div>
            </div>

            <div className='md:mx-5 md:grid grid-cols-2 gap-4'>
                <div>
                    <p className='text-center text-lg font-medium'>Task Distribution by Status</p>
                    <div className='mt-4' style={{ height: "350px" }}>
                        <Pie className='' data={pieChartData} options={{ maintainAspectRatio: false, responsive: true }} />
                    </div>


                </div>
                <div className='mt-10 md:mt-0'><p className='text-center text-lg font-medium'>Task Priority Levels</p>
                    <Bar data={barChartData} options={barChartOptions} />
                </div>
            </div>

        </>
    )
}

export default Statistics