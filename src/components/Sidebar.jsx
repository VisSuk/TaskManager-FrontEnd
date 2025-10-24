import { faBarsProgress, faChartSimple, faListCheck, faPlus, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Sidebar({ setActiveComponent }) {

    const SideMenuItems = [

        { key: "stats", label: "Statistics", icon: faChartSimple },
        { key: "dashboard", label: "DashBoard", icon: faBarsProgress },
        { key: "create", label: "Create Task", icon: faPlus },
        { key: "logout", label: "Logout", icon: faPowerOff }
    ]

    // const [hoverIndex, sethoverIndex] = useState("")
    const [activeTab, setActiveTab] = useState("")
    // console.log(activeTab);
    


    return (
        <>

            <div className='flex flex-col items-center justify-evenly h-3/5'>
                <div className='flex flex-col items-center'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1&ipt=51ae50ec9b0280ccb9402c5897954c78d8ca172fe47c24581ad948ebff27639c" alt="User Picture" style={{ height: '150px' }} />
                    <h1 className='text-2xl font-semibold'>John Doe</h1>
                    <h2 className='mt-1 text-lg'>johndoe@gmail.com</h2>
                </div>

                <div className='flex flex-col items-center w-full'>
                    <ul className='w-full'>
                        {SideMenuItems.map((items) => (
                            <li key={items.key}
                                className={activeTab==items.key?'py-4 text-center text-xl flex items-center justify-start ps-7 bg-blue-500 text-white':'py-4 text-center text-xl flex items-center justify-start ps-7 hover:bg-blue-200'}
                                onClick={() => {setActiveComponent(items.key), setActiveTab(items.key)}}
                                
                                >
                                <FontAwesomeIcon icon={items.icon} />
                                <span className='ms-2'>{items.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar