import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard'
import ManageTasks from './ManageTasks'
import CreateTask from './CreateTask'

function ViewProfile() {

    const [activeComponent, setActiveComponent] = useState('dashboard')

    // console.log(activeComponent);
    

    const renderComponent = () => {
        if(activeComponent == 'dashboard'){return <Dashboard/> }
        else if(activeComponent == 'manage'){return <ManageTasks/> }
        else if(activeComponent == 'create'){return <CreateTask/> }
        else{return <Dashboard/> }
    }

  return (
    <>
    
    <h1>Task Manager</h1>

    <div className='md:grid grid-cols-[1fr_5fr]'>

    <div>
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