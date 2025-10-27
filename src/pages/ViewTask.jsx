import React, { useEffect, useState } from 'react'
import { viewTaskDetailsApi } from '../services/allApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { capitalize } from '../functions/capitalizeWord'
import { getFormattedDate } from '../functions/formattedDate'

function ViewTask({ selectedTaskId }) {

    const [token, setToken] = useState(null)

    const [taskDetails, setTaskDetails] = useState({
        title: "",
        description: "",
        priority: "",
        taskStatus: "",
        dueDate: ""
    })
    console.log(taskDetails)

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
        // console.log(result.data)
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
            <div className="mx-5 mt-8 p-7 w-3/4 border rounded-lg shadow">

                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">
                        {isEditing ? 'Edit Task Details' : 'Task Details'}
                    </h1>

                    {!isEditing && (
                        <div className="w-1/5 flex justify-evenly">
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="py-2 px-3 rounded-lg bg-blue-200 hover:bg-blue-300 transition"
                            >
                                <FontAwesomeIcon className="text-xl text-blue-600" icon={faPenToSquare} />
                            </button>
                            <button type="button" className="p-2 rounded-lg bg-red-200 hover:bg-red-300 transition">
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


                <div className="grid grid-cols-3 gap-4 mt-5">

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


                    <div>
                        <h1 className="text-lg">Due Date</h1>
                        {isEditing ? (
                            <input
                                type="date"
                                className="w-3/4 mt-1 py-3 px-3 border border-gray-300 rounded-lg hover:border-black transition duration-150"
                                value={new Date(taskDetails.dueDate).toISOString().substring(0,10)}
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
                        <button type="button" className="px-5 py-2 rounded-lg text-lg font-semibold text-white bg-green-500 hover:bg-green-600">Save Changes</button>
                    </div>
                )}
            </div>


        </>
    )
}

export default ViewTask