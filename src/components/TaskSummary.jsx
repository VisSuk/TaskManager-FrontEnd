import React from 'react'
import { useNavigate } from 'react-router-dom';
import { getFormattedDate } from '../functions/formattedDate';
import { capitalize } from '../functions/capitalizeWord';


function TaskSummary({ task, setActiveComponent, setSelectedTaskId }) {

    const navigate = useNavigate()


    const getStatusClasses = (status) => {
        
        if(status == 'pending'){
            return 'bg-gray-200 text-gray-600'
        }
        else if(status == 'inprogress'){
            return 'bg-blue-200 text-blue-600'
        }
        else if(status == 'completed'){}
            return 'bg-green-200 text-green-600'
    }

    const getPriorityClasses = (priority) => {
        
        if(priority == 'low'){
            return 'bg-yellow-200 text-yellow-600'
        }
        else if(priority == 'medium'){
            return 'bg-orange-200 text-orange-600'
        }
        else if(priority == 'high'){
            return 'bg-red-200 text-red-600'
        }

    }

    const handleViewTask = (taskId) => {

        setActiveComponent("view")
        setSelectedTaskId(taskId)

    }


    return (
        <>

            <div className='p-3 border rounded-lg' onClick={()=>{handleViewTask(task._id)}}  >
                <div className=''>
                    <ul className='flex justify-evenly'>
                        <li className={`w-1/3 rounded p-1 text-center font-semibold ${getStatusClasses(task.taskStatus)}`}>{capitalize(task.taskStatus)}</li>
                        <li className={`w-2/5 rounded p-1 text-center font-semibold ${getPriorityClasses(task.priority)}`}><span>{capitalize(task.priority)}</span> Priority</li>
                    </ul>
                </div>

                <div className='mt-3 p-3'>
                    <h1 className='text-xl font-semibold'>{task.title}</h1>
                    <p className='text-justify text-base text-gray-600 mt-2'>{task.description.slice(0,120)}...</p>
                </div>

                <div className='mt-1 px-3 py-1 flex items-center justify-between w-3/4'>
                    <h1 className='w-1/3'>Due Date</h1>
                    <h2 className='font-semibold text-xl'>{getFormattedDate(task.dueDate)}</h2>
                </div>

            </div>

        </>
    )
}

export default TaskSummary