import React from 'react'
import TaskSummary from '../components/TaskSummary'

function Dashboard() {
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
        <div className=''> <TaskSummary/> </div>
        <div className=''> <TaskSummary/> </div>
        <div className=''> <TaskSummary/> </div>
        <div className=''> <TaskSummary/> </div>
      </div>
    </div>
    
    </>
  )
}

export default Dashboard