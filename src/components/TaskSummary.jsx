import React from 'react'

function TaskSummary() {
  return (
    <>
    
    <div className='p-3 border rounded-lg'>
        <div className=''>
            <ul className='flex justify-evenly'>
                <li className='w-1/3 rounded p-1 text-center font-semibold bg-blue-200 text-blue-600'>In Progress</li>
                <li className='w-1/3 rounded p-1 text-center font-semibold bg-red-200 text-red-600'>High Priority</li>
            </ul>
        </div>
        
        <div className='mt-3 p-3'>
            <h1 className='text-xl font-semibold'>Create Application</h1>
            <p className='text-justify text-base text-gray-600 mt-2'>Create a clean and modern homepage layout using Tailwind CSS. Ensure the design is responsive and yayayayayay</p>
        </div>

        <div className='mt-1 px-3 py-1 flex items-center w-3/4'>
            <h1 className='w-1/3'>Due Date</h1>
            <h2 className='font-semibold text-xl'>30th Nov 2025</h2>
        </div>

    </div>
    
    </>
  )
}

export default TaskSummary