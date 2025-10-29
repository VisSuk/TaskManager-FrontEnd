import { faBarsProgress, faChartSimple, faListCheck, faPlus, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar({ setActiveComponent, userDetails }) {

    const navigate = useNavigate()

    const SideMenuItems = [

        { key: "stats", label: "Statistics", icon: faChartSimple },
        { key: "dashboard", label: "DashBoard", icon: faBarsProgress },
        { key: "create", label: "Create Task", icon: faPlus },
    ]

    // const [hoverIndex, sethoverIndex] = useState("")
    const [activeTab, setActiveTab] = useState("dashboard")
    // console.log(activeTab);
    const handleLogout = () => {

        sessionStorage.removeItem('token')
        sessionStorage.removeItem('exisingUser')
        navigate('/', { replace: true })

    }


    return (
        <>

            <div className='flex flex-col items-center justify-evenly h-screen md:h-3/5'>
                <div className='flex flex-col items-center'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1&ipt=51ae50ec9b0280ccb9402c5897954c78d8ca172fe47c24581ad948ebff27639c" alt="User Picture" style={{ height: '150px' }} />
                    <h1 className='text-2xl font-semibold'>{userDetails.username}</h1>
                    <h2 className='mt-1 p-1 text-sm md:text-lg'>{userDetails.email}</h2>
                </div>

                <div className='flex flex-col items-center justify-evenly h-full w-full'>
                    <ul className='w-full'>
                        {SideMenuItems.map((items) => (
                            <li key={items.key}
                                className={activeTab == items.key ? 'py-4 text-center text-xl flex items-center justify-start md:ps-7 bg-blue-500 text-white' : 'py-4 text-center text-xl flex items-center justify-start md:ps-7 hover:bg-blue-200'}
                                onClick={() => { setActiveComponent(items.key), setActiveTab(items.key) }}

                            >
                                <FontAwesomeIcon icon={items.icon} />
                                <span className='ms-2'>{items.label}</span>
                            </li>
                        ))}

                    </ul>
                    <div className='w-full py-4 text-center text-xl flex items-center justify-start ps-7 hover:bg-red-200' onClick={handleLogout}>
                        <FontAwesomeIcon icon={faPowerOff} />
                        <p className='ms-2'>Logout</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar