import React from 'react'

function Statistics() {
    return (
        <>

            <div className='border mx-5 my-8 p-7'>
                <h1 className='text-2xl font-semibold'>Good Morning, John</h1>
                <h2 className='mt-1'>Wednesday 23rd October 2025</h2>
                <div className='grid grid-cols-4 gap-4 mt-4  py-3'>
                    <div className='flex justify-center'>
                        <div className='px-1 rounded bg-blue-700'></div>
                        <p className='ms-3 text-lg text-gray-500'> <span className='font-semibold text-xl text-gray-700'>17</span> Total Tasks</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='px-1 rounded bg-violet-700'></div>
                        <p className='ms-3 text-lg text-gray-500'> <span className='font-semibold text-xl text-gray-700'>17</span> Pending</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='px-1 rounded bg-blue-400'></div>
                        <p className='ms-3 text-lg text-gray-500'> <span className='font-semibold text-xl text-gray-700'>17</span> In Progress</p>
                    </div>
                    <div className='flex justify-center'>
                        <div className='px-1 rounded bg-green-500'></div>
                        <p className='ms-3 text-lg text-gray-500'> <span className='font-semibold text-xl text-gray-700'>17</span> Completed</p>
                    </div>
                </div>
            </div>

            <div className='mx-5 grid grid-cols-2 gap-4'>
            <div className='border'>Task Distribution</div>
            <div className='border'>Task Priority Levels</div>
            </div>

        </>
    )
}

export default Statistics