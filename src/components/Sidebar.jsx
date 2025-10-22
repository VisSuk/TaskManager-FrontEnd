import React from 'react'

function Sidebar({ setActiveComponent }) {

    const SideMenuItems = [
        { key: "dashboard", label: "DashBoard" },
        { key: "manage", label: "Manage Tasks" },
        { key: "create", label: "Create Task" }
    ]

    

    return (
        <>

            <div className='flex flex-col items-center'>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1&ipt=51ae50ec9b0280ccb9402c5897954c78d8ca172fe47c24581ad948ebff27639c" alt="User Picture" style={{ height: '200px' }} />
                <h1>John Doe</h1>
                <h2>johndoe@gmail.com</h2>
            </div>

            <div className='mt-6 flex flex-col items-center'>
                <ul>
                    {SideMenuItems.map((items) => (
                        <li onClick={()=>setActiveComponent(items.key)} >{items.label}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Sidebar