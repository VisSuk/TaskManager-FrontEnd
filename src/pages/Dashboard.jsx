import React, { useEffect, useState } from 'react'
import TaskSummary from '../components/TaskSummary'
import { getUserTasksApi } from '../services/allApi'

function Dashboard({ setActiveComponent, setSelectedTaskId }) {

  const [token, setToken] = useState("")
  const [allTasks, setAllTasks] = useState([])
  console.log(token)

  const getUserTasks = async() => {

    const reqHeader = {"Authorization":`Bearer ${token}`}
    const result = await getUserTasksApi(reqHeader)
    console.log(result.data)
    setAllTasks(result.data)

  }

  useEffect( () => {
    setToken(sessionStorage.getItem("token"))
  }, [] )

  useEffect( () => {
    if(token){
      getUserTasks()
    }
  }, [token])


  return (
    <>
    
    <div className='flex justify-between items-center mx-5 mt-8 p-7 border'>
      <h1 className='text-2xl font-semibold'>My Tasks</h1>
      <div className='md:w-1/2'>
        <ul className='flex justify-evenly'>
          <li className='text-lg font-medium px-4'> All <span className='bg-gray-300 rounded p-1'>18</span> </li>
          <li className='text-lg font-medium px-4'> Pending <span className='bg-gray-300 rounded p-1'>18</span> </li>
          <li className='text-lg font-medium px-4'> In Progress <span className='bg-gray-300 rounded p-1'>18</span> </li>
          <li className='text-lg font-medium px-4'> Completed <span className='bg-gray-300 rounded p-1'>18</span></li>
        </ul>
      </div>
    </div>

    <div className='mt-5 mx-5 h-150'>
      <div className="grid grid-cols-3 gap-4"> 
        {allTasks?.map((task) => (<div className='' key={task._id}> <TaskSummary task={task} setActiveComponent= {setActiveComponent}  setSelectedTaskId={setSelectedTaskId} /> </div>))
          }
      </div>
    </div>
    
    </>
  )
}

export default Dashboard