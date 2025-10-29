import React, { useEffect, useState } from 'react'
import { deleteTaskApi, editTaskApi, viewTaskDetailsApi } from '../services/allApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowLeft, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { capitalize } from '../functions/capitalizeWord'
import { getFormattedDate } from '../functions/formattedDate'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

function ViewTask({ setActiveComponent, selectedTaskId }) {

    const navigate = useNavigate()

    const [token, setToken] = useState(null)
    const [open, setOpen] = useState(false)

    const [taskDetails, setTaskDetails] = useState({
        title: "",
        description: "",
        priority: "",
        taskStatus: "",
        dueDate: ""
    })
    // console.log(taskDetails)

    // backup for when editing is cancelled
    const [taskDetails_2, setTaskDetails_2] = useState({
        title: "",
        description: "",
        priority: "",
        taskStatus: "",
        dueDate: ""
    })

    const [isEditing, setIsEditing] = useState(false)

    console.log(taskDetails)

    const viewTaskDetails = async () => {

        const taskId = selectedTaskId
        const reqHeader = { "Authorization": `Bearer ${token}` }
        // console.log(taskId, reqHeader)
        const result = await viewTaskDetailsApi(taskId, reqHeader)
        console.log(result.data)
        setTaskDetails({
            title: result.data.title,
            description: result.data.description,
            priority: result.data.priority,
            taskStatus: result.data.taskStatus,
            dueDate: result.data.dueDate
        })
        setTaskDetails_2({
            title: result.data.title,
            description: result.data.description,
            priority: result.data.priority,
            taskStatus: result.data.taskStatus,
            dueDate: result.data.dueDate
        })

    }

    const handleSubmit = async () => {

        const { title, description, priority, taskStatus, dueDate } = taskDetails
        const taskId = selectedTaskId
        const reqHeader = { "Authorization": `Bearer ${token}` }

        const reqBody = {
            title,
            description,
            priority,
            taskStatus,
            dueDate
        }

        const result = await editTaskApi(taskId, reqBody, reqHeader)
        console.log(result.data)
        if (result.status == 200) {
            alert("Edit Successfull")
            setIsEditing(false)
        }
        else {
            alert("Something went wrong!")
        }

    }

    const handleDelete = async () => {

        console.log("Inside Delete Function")
        const reqHeader = { "Authorization": `Bearer ${token}` }
        const taskId = selectedTaskId

        const result = await deleteTaskApi(taskId, reqHeader)
        if (result.status == 200) {
            alert("Task Deleted")
            setActiveComponent('dashboard')
        }
        else {
            alert("Something went wrong")
        }

    }

    useEffect(() => {
        setToken(sessionStorage.getItem("token"))
    }, [])

    useEffect(() => {
        if (token) {
            viewTaskDetails()
        }
    }, [token])

    return (
        <>
            <div className="mx-1 md:mx-5 mt-8 p-3 md:p-7 md:w-3/4 border rounded-lg shadow">

                <div className="flex justify-between items-center ">
                    <div className='flex items-center justify-between w-3/5 md:w-1/4 '>
                        {!isEditing &&
                            <div className='flex items-center justify-between cursor-pointer hover:text-blue-500' onClick={() => setActiveComponent("dashboard")}>
                                <FontAwesomeIcon className="text-sm" icon={faArrowLeft} />
                                <p>Back</p>
                            </div>}
                        <h1 className="text-2xl font-semibold">
                            {isEditing ? 'Edit Task Details' : 'Task Details'}
                        </h1>
                    </div>

                    {!isEditing && (
                        <div className="w-1/3 md:w-1/5 flex justify-evenly ">
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="py-2 px-3 rounded-lg bg-blue-200 hover:bg-blue-300 transition"
                            >
                                <FontAwesomeIcon className="text-xl text-blue-600" icon={faPenToSquare} />
                            </button>
                            <button type="button" className="p-2 rounded-lg bg-red-200 hover:bg-red-300 transition" onClick={() => { setOpen(!open) }} >
                                <FontAwesomeIcon className="text-xl text-red-600" icon={faTrash} />
                            </button>
                        </div>
                    )}
                </div>


                <div className="mt-6">
                    {isEditing ? (
                        <>
                            <label htmlFor="TaskTitle" className="text-lg mt-2">
                                Task Title
                            </label>
                            <input
                                id="TaskTitle"
                                type="text"
                                placeholder="Enter task title"
                                className="mt-1 border border-gray-300 w-full rounded-xl p-3 hover:border-black transition delay-75 duration-150"
                                onChange={(e) => { setTaskDetails({ ...taskDetails, title: e.target.value }) }}
                                value={taskDetails.title}
                            />
                        </>
                    ) :
                        <p className="text-3xl mt-2 font-bold">{taskDetails.title}</p>
                    }
                </div>


                <div className="mt-5">
                    {isEditing ? (
                        <>
                            <label htmlFor="Description" className="text-lg mt-2 block">
                                Description
                            </label>
                            <textarea
                                id="Description"
                                rows="5"
                                placeholder="Enter task description"
                                className="mt-1 border border-gray-300 w-full rounded-xl p-3 hover:border-black transition delay-75 duration-150"
                                onChange={(e) => { setTaskDetails({ ...taskDetails, description: e.target.value }) }}
                                value={taskDetails.description}
                            ></textarea>
                        </>
                    ) :
                        <p className="text-justify text-lg">{taskDetails.description}</p>
                    }
                </div>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">

                    <div>
                        <h1 className="text-lg">Priority</h1>
                        {isEditing ? (
                            <select className="w-3/4 mt-1 p-3 rounded-lg border border-gray-300"
                                onChange={(e) => { setTaskDetails({ ...taskDetails, priority: e.target.value }) }}
                                value={taskDetails.priority} >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        ) :
                            <p className="text-2xl font-bold">{capitalize(taskDetails.priority)}</p>
                        }
                    </div>


                    <div>
                        <h1 className="text-lg">Task Status</h1>
                        {isEditing ? (
                            <div className="mt-1 flex flex-col gap-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="taskStatus" value="pending" checked={taskDetails.taskStatus == "pending"}
                                        onChange={(e) => { setTaskDetails({ ...taskDetails, taskStatus: e.target.value }) }} />
                                    Pending
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="taskStatus" value="inprogress" checked={taskDetails.taskStatus == "inprogress"}
                                        onChange={(e) => { setTaskDetails({ ...taskDetails, taskStatus: e.target.value }) }} />
                                    In Progress
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="taskStatus" value="completed" checked={taskDetails.taskStatus == "completed"}
                                        onChange={(e) => { setTaskDetails({ ...taskDetails, taskStatus: e.target.value }) }} />
                                    Completed
                                </label>
                            </div>
                        ) :
                            <p className="text-2xl font-bold">{capitalize(taskDetails.taskStatus)}</p>
                        }
                    </div>


                    <div className=''>
                        <h1 className="text-lg">Due Date</h1>
                        {isEditing ? (
                            <input
                                type="date"
                                className="w-3/4 mt-1 py-3 px-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
                                value={new Date(taskDetails.dueDate).toISOString().substring(0, 10)}
                                onChange={(e) => { setTaskDetails({ ...taskDetails, dueDate: e.target.value }) }}
                            />
                        ) :
                            <p className="text-2xl font-bold">{taskDetails?.dueDate ? getFormattedDate(taskDetails.dueDate) : "Loading Due Date"}</p>
                        }
                    </div>
                </div>


                {isEditing && (
                    <div className="flex flex-col gap-4 mt-6">
                        <button type="button"
                            onClick={() => { setTaskDetails(taskDetails_2), setIsEditing(false) }}
                            className="px-5 py-2 rounded-lg text-lg font-semibold bg-gray-300 hover:bg-gray-400">Cancel</button>
                        <button type="button"
                            onClick={handleSubmit}
                            className="px-5 py-2 rounded-lg text-lg font-semibold text-white bg-green-500 hover:bg-green-600">Save Changes</button>
                    </div>
                )}

                <Dialog open={open} onClose={setOpen} className="relative z-10">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                    />

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <DialogPanel
                                transition
                                className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                            >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                            <DialogTitle as="h3" className="text-xl font-semibold text-black text-center">
                                                Delete Task?
                                            </DialogTitle>

                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        onClick={() => { setOpen(false), handleDelete() }}
                                        className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
                                    >
                                        Confirm
                                    </button>
                                    <button
                                        type="button"
                                        data-autofocus
                                        onClick={() => setOpen(false)}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>

            </div>


        </>
    )
}

export default ViewTask