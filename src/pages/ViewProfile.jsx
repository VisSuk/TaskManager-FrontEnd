import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard'
import CreateTask from './CreateTask'
import Statistics from './Statistics'

function ViewProfile() {

    const [activeComponent, setActiveComponent] = useState('dashboard')

    // console.log(activeComponent);
    

    const renderComponent = () => {
        if(activeComponent == 'dashboard'){return <Dashboard/> }
        else if(activeComponent == 'stats'){return <Statistics/> }
        else if(activeComponent == 'create'){return <CreateTask/> }
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