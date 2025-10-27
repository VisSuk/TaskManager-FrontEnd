import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard'
import CreateTask from './CreateTask'
import Statistics from './Statistics'
import ViewTask from './ViewTask'

function ViewProfile() {

    const [activeComponent, setActiveComponent] = useState('dashboard')
    const [selectedTaskId, setSelectedTaskId] = useState(null)

    // console.log(activeComponent);
    

    const renderComponent = () => {
        if(activeComponent == 'dashboard'){return <Dashboard setActiveComponent={setActiveComponent}  setSelectedTaskId={setSelectedTaskId} /> }
        else if(activeComponent == 'stats'){return <Statistics/> }
        else if(activeComponent == 'create'){return <CreateTask/> }
        else if(activeComponent == 'view'){return <ViewTask selectedTaskId={selectedTaskId} ></ViewTask>}
        else{return <Dashboard/> }
    }

  return (
    <>
    
    <h1 className='border p-6 text-4xl font-semibold'>Task Manager</h1>

    <div className='md:grid grid-cols-[1fr_5fr]'>

    <div className='border h-screen'>
        <Sidebar setActiveComponent = {setActiveComponent} />
    </div>
    <div>
        {renderComponent()}
    </div>

    </div>

    </>
  )
}

export default ViewProfile