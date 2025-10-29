import React, { useEffect, useState } from 'react'
import { createTaskApi } from '../services/allApi';

function CreateTask() {

  const [token, setToken] = useState("")
  // console.log(token);


  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
  })

  console.log(taskDetails);

  const handleSubmit = async () => {

    const { title, description, priority, dueDate } = taskDetails

    if (!title || !description || !priority || !dueDate) {
      alert("Enter all Task Details")
    }
    else {

      const reqHeader = { "Authorization": `Bearer ${token}` }
      // console.log(reqHeader)
      const reqBody = { title, description, priority, dueDate }
      const result = await createTaskApi(reqBody, reqHeader)
      // console.log(result.status)
      if (result.status == 406) {
        alert("Task Already Exists")
      }
      else if (result.status == 200) {
        alert("Task added successfully")
      }
      else {
        alert("Something went wrong")
      }
      setTaskDetails(({
        title: "",
        description: "",
        priority: "low",
        dueDate: "",
      }))

    }

  }

  useEffect(() => {
    setToken(sessionStorage.getItem("token"))
  }, [])


  return (
    <>

      <div className="border rounded-lg mx-2 md:mx-5 mt-8 p-7 md:w-3/4">
        <h1 className='text-2xl font-semibold'>Create Task</h1>

        <div className='mt-6'>
          <label htmlFor="TaskTitle" className='text-lg  mt-2 block'>Task Title</label>
          <input
            id="TaskTitle"
            type="text"
            placeholder='Enter task title'
            value={taskDetails.title}
            onChange={(e) => { setTaskDetails({ ...taskDetails, title: e.target.value }) }}
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
            value={taskDetails.description}
            onChange={(e) => { setTaskDetails({ ...taskDetails, description: e.target.value }) }}
            className='mt-1 border border-gray-300 w-full rounded-xl p-3 placeholder:text-gray-500 placeholder:font-semibold hover:border-black transition delay-75 duration-150'
          />
        </div>

        <div className='grid grid-cols-2 gap-4 mt-5'>
          <div className=''>
            <h1 className='text-lg'>Priority</h1>
            <select 
            className='md:w-1/3 mt-1 p-3 rounded-lg border border-gray-300' 
            value={taskDetails.priority}
            onChange={(e) => { setTaskDetails({ ...taskDetails, priority: e.target.value }) }} 
            >
              <option value="low" className='text-xl'>Low</option>
              <option value="medium" className='text-xl' >Medium</option>
              <option value="high" className='text-xl'>High</option>
            </select>
          </div>
          <div>
            <h1 className='text-lg'>Due Date</h1>
            <input
              type="date"
              className='md:w-1/2 mt-1 py-3 px-3 border border-gray-300 rounded-lg bg-white hover:border-black transition duration-150 focus:outline-none font-medium '
              value={taskDetails.dueDate}
              onChange={(e) => { setTaskDetails({ ...taskDetails, dueDate: e.target.value }) }}
            />
          </div>
        </div>

        <button
          type='button'
          className='w-full mt-5 py-2 rounded-lg text-lg text-white font-semibold bg-blue-500 hover:bg-blue-700 cursor-pointer'
          onClick={handleSubmit}
        >Submit</button>



      </div>



    </>
  )
}

export default CreateTask