import React from 'react'

function CreateTask() {
  return (
    <>

      <div className="border mx-5 mt-8 p-7 w-3/4">
        <h1 className='text-2xl font-semibold'>Create Task</h1>

        <div className='mt-6'>
          <label htmlFor="TaskTitle" className='text-lg  mt-2 block'>Task Title</label>
          <input
            id="TaskTitle"
            type="text"
            placeholder='Enter task title'
            className='mt-1 border border-gray-300 w-full rounded-xl p-3 placeholder:text-gray-500 hover:border-black transition delay-75 duration-150 placeholder:font-semibold'
          />
        </div>

        <div className='mt-5'>
          <label htmlFor="Description" className='text-lg  mt-2 block'>Description</label>
          <textarea
            id="Description"
            type="text"
            rows={5}
            placeholder='Describe Task'
            className='mt-1 border border-gray-300 w-full rounded-xl p-3 placeholder:text-gray-500 placeholder:font-semibold hover:border-black transition delay-75 duration-150'
          />
        </div>

        <div className='grid grid-cols-2 gap-4 mt-5'>
          <div className=''>
            <h1 className='text-lg'>Priority</h1>
            <select className='w-1/3 mt-1 py-2'>
              <option value="volvo" className='text-xl' selected>Low</option>
              <option value="saab" className='text-xl' >Medium</option>
              <option value="mercedes" className='text-xl'>High</option>
            </select>
          </div>
          <div>
            <h1 className='text-lg'>Due Date</h1>
          </div>
        </div>

      </div>



    </>
  )
}

export default CreateTask