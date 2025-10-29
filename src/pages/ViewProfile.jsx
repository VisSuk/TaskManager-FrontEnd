import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard'
import CreateTask from './CreateTask'
import Statistics from './Statistics'
import ViewTask from './ViewTask'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function ViewProfile() {

  const [activeComponent, setActiveComponent] = useState('dashboard')
  const [selectedTaskId, setSelectedTaskId] = useState(null)
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: ""
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // console.log(userDetails)

  // console.log(activeComponent);


  const renderComponent = () => {
    if (activeComponent == 'dashboard') { return <Dashboard setActiveComponent={setActiveComponent} setSelectedTaskId={setSelectedTaskId} /> }
    else if (activeComponent == 'stats') { return <Statistics userDetails={userDetails} /> }
    else if (activeComponent == 'create') { return <CreateTask /> }
    else if (activeComponent == 'view') { return <ViewTask setActiveComponent={setActiveComponent} selectedTaskId={selectedTaskId} ></ViewTask> }
    else { return <Dashboard /> }
  }

  useEffect(() => {

    if (sessionStorage.getItem('token')) {
      const user = JSON.parse(sessionStorage.getItem("exisingUser"))
      setUserDetails({
        username: user.name,
        email: user.email
      })
    }
  }, [])

  return (
    <>

      <div className='flex  items-center md:border-b p-6'>
        <button className='md:hidden text-2xl' onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1 className='w-full text-center md:text-start text-3xl font-semibold' onClick={()=>{setActiveComponent('dashboard')}} >Task Manager</h1>
      </div>

      <div className='md:grid grid-cols-[1fr_5fr]'>

        <div
          className={`fixed md:static top-0 left-0 bg-white h-full md:h-screen border-r z-50 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <Sidebar
            setActiveComponent={(value) => {
              setActiveComponent(value)
              setSidebarOpen(false)
            }}
            userDetails={userDetails}
          />
        </div> 
        <div>
          {renderComponent()}
        </div>

      </div>

    </>
  )
}

export default ViewProfile