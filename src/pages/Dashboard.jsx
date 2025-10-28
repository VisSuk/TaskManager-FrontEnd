import React, { useEffect, useState } from 'react'
import TaskSummary from '../components/TaskSummary'
import { getUserTasksApi } from '../services/allApi'
import { getTaskCounts } from '../functions/taskCounts'

function Dashboard({ setActiveComponent, setSelectedTaskId }) {

  const [token, setToken] = useState("")
  const [allTasks, setAllTasks] = useState([])
  console.log(token)

  const [selectedFilters, setSelectedFilters] = useState({
    priority:"all",
    taskStatus:"all",
    dueDateOrder:"none"
  })
  console.log(selectedFilters)

  const getUserTasks = async () => {

    const reqHeader = { "Authorization": `Bearer ${token}` }
    const result = await getUserTasksApi(reqHeader)
    console.log(result.data)
    setAllTasks(result.data)

  }

  

  const setfilteredTasks = () => {

    var filteredTasks = [...allTasks]

    if(selectedFilters.priority != "all"){
      var filteredTasks = filteredTasks.filter((task) => task.priority == selectedFilters.priority)
    }
    
    if(selectedFilters.taskStatus != "all"){
      var filteredTasks = filteredTasks.filter((task) => task.taskStatus == selectedFilters.taskStatus)
    }

    if(selectedFilters.dueDateOrder == "none"){
      return filteredTasks
    }
    else{
      if(selectedFilters.dueDateOrder == "descending"){
        var sortedTasks = filteredTasks.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate))
        return sortedTasks
      }
      else if(selectedFilters.dueDateOrder == "ascending"){
        var sortedTasks = filteredTasks.sort((a,b) => new Date(b.dueDate) - new Date(a.dueDate))
        return sortedTasks
      }
    }

  }

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

      <div className='flex flex-col md:flex-row justify-between items-center md:mx-5 mt-8 px-2 md:p-7 border-b'>
        <h1 className='text-2xl font-semibold'>My Tasks</h1>
        <div className='w-full md:w-1/2'>
          <ul className='flex justify-evenly'>
            <li className='text-lg font-medium py-2 md:py-0 text-center'> All <span className='bg-blue-700 text-white rounded py-1 px-3'>{getTaskCounts(allTasks).all}</span> </li>
            <li className='text-lg font-medium py-2 md:py-0 text-center'> Pending <span className='bg-violet-700 text-white rounded py-1 px-3'>{getTaskCounts(allTasks).pending}</span> </li>
            <li className='text-lg font-medium py-2 md:py-0 text-center'> In Progress <span className='bg-blue-400 text-white rounded py-1 px-3'>{getTaskCounts(allTasks).inprogress}</span> </li>
            <li className='text-lg font-medium py-2 md:py-0 text-center'> Completed <span className='bg-green-500 text-white rounded py-1 px-3'>{getTaskCounts(allTasks).completed}</span></li>
          </ul>
        </div>
      </div>

      <div className='w-full md:mx-5 mt-2 md:px-7 md:grid md:grid-cols-2'>
        <div className=''></div>
        <div className='grid grid-cols-3'>
          <div className='flex flex-col items-center'>
            <p>Priority</p>
            <select 
            className='border w-3/4 mt-1 p-3 rounded-lg border-gray-300'
            value={selectedFilters.priority}
            onChange={(e) => {setSelectedFilters({...selectedFilters, priority:e.target.value})}}
            >
              <option value="all" className='text-lg'>All</option>
              <option value="low" className='text-lg'>Low</option>
              <option value="medium" className='text-lg'>Medium</option>
              <option value="high" className='text-lg'>High</option>
            </select>
          </div>
          <div className='flex flex-col items-center'>
            <p>TaskStatus</p>
            <select 
            className='border w-3/4 mt-1 p-3 rounded-lg border-gray-300'
            value={selectedFilters.taskStatus}
            onChange={(e) => {setSelectedFilters({...selectedFilters, taskStatus:e.target.value})}}
            >
              <option value="all" className='text-lg' >All</option>
              <option value="pending" className='text-lg'>Pending</option>
              <option value="inprogress" className='text-lg'>Inprogress</option>
              <option value="completed" className='text-lg'>Completed</option>
            </select>
          </div>
          <div className='flex flex-col items-center'>
            <p>Due Date</p>
            <select 
            className='border w-3/4 mt-1 p-3 rounded-lg border-gray-300'
            value={selectedFilters.dueDateOrder}
            onChange={(e) => {setSelectedFilters({...selectedFilters, dueDateOrder:e.target.value})}}
            >
              <option value="none" className='text-lg'>No filter</option>
              <option value="descending" className='text-lg'>Due First</option>
              <option value="ascending" className='text-lg'>Due Last</option>
            </select>
          </div>
        </div>
      </div>

      <div className='mt-5 mx-5 h-150'>
        <div className="md:grid grid-cols-3 gap-4">
          {setfilteredTasks()?.map((task) => (<div className='my-5 md:my-0' key={task._id}> <TaskSummary task={task} setActiveComponent={setActiveComponent} setSelectedTaskId={setSelectedTaskId} /> </div>))
          }
        </div>
      </div>

    </>
  )
}

export default Dashboard