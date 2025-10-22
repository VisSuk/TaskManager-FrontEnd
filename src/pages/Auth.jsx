import React from 'react'
import { Link } from 'react-router-dom'

function Auth({ register }) {
    return (
        <>
            <div className='flex flex-col items-center justify-center border h-screen'>
                <h1 className=' text-5xl md:text-6xl text-center'>Task Manager</h1>


                { register? <div className='flex flex-col items-center md:w-1/2 p-7'>
                    <h1 className='text-3xl md:text-4xl'>Create an Account</h1>
                    <h2 className='md:text-2xl'>Join us today by filling the details</h2>

                    <div className="md:grid grid-cols-1 gap-4 my-6 w-100 md:w-3/4 p-7">
                        <div className=''>
                            <h1 className='text-xl font-semibold mt-2'>Full Name</h1>
                            <input type="text" placeholder='John Doe' className='mt-2 border-1 border-gray-300 w-full rounded-3xl px-3 py-2 placeholder:text-gray-500 hover:border hover:border-black transition delay-75 duration-150 ' />
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold mt-2'>Email Address</h1>
                            <input type="email" placeholder='johndoe@gmail.com' className='mt-2 border-1 border-gray-300 w-full rounded-3xl px-3 py-2 placeholder:text-gray-500 placeholder:text-gray-500 hover:border hover:border-black transition delay-75 duration-150' />

                        </div>
                        <div>
                            <h1 className='text-xl font-semibold mt-2' >Password</h1>
                            <input type="password" placeholder='Min. 6 characters' className='mt-2 border-1 border-gray-300 w-full rounded-3xl px-3 py-2 placeholder:text-gray-500  hover:border hover:border-black transition delay-75 duration-150' />

                        </div>
                        <div className='my-4'>
                            <button className=' transition delay-75 duration-150 w-full text-white text-xl rounded-3xl  bg-blue-500 px-3 py-2 hover:text-blue-500 hover:bg-white hover:border hover:border-blue-500'>SIGN UP</button>
                        </div>

                        <p className='text-center text-lg'>Already have an account? <span className='text-blue-500 underline'><Link to={'/'} >Login</Link></span></p>
                    </div>
                </div>

                    :

                <div className='flex flex-col items-center md:w-1/2 p-7'>
                    <h1 className='text-3xl md:text-4xl'>Welcome Back</h1>
                    <h2 className='text-lg md:text-2xl'>Login to your account</h2>

                    <div className="md:grid grid-cols-1 gap-4 my-6 w-100 md:w-3/4 p-7">
                        <div>
                            <label htmlFor="email" className='text-xl font-semibold mt-2 block'>Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder='johndoe@gmail.com'
                                className='mt-2 border border-gray-300 w-full rounded-3xl px-3 py-2 placeholder:text-gray-500 hover:border-black transition delay-75 duration-150'
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className='text-xl font-semibold mt-2 block'>Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder='Your password'
                                className='mt-2 border border-gray-300 w-full rounded-3xl px-3 py-2 placeholder:text-gray-500 hover:border-black transition delay-75 duration-150'
                            />
                        </div>


                        <div className='my-4'>
                            <button className='transition delay-75 duration-150 w-full text-white text-xl rounded-3xl bg-blue-500 px-3 py-2 hover:text-blue-500 hover:bg-white hover:border hover:border-blue-500'>
                                LOGIN
                            </button>
                        </div>

                        <p className='text-center text-lg'>
                            Don’t have an account? <span   className='text-blue-500 underline cursor-pointer'><Link to={'/register'} >Sign Up</Link></span>
                        </p>
                    </div>
                </div>}


            </div>

        </>
    )
}

export default Auth