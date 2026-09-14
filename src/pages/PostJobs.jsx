import React, { useContext, useEffect, useState } from 'react'
import { JobsContext } from '../contexts/JobsContext'

const PostJobs = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <p>Post a job for your business requirements</p>
      <button onClick={() => setOpen(op => !op)} className='bg-green-600 p-3 m-2 rounded-lg'>+ Create Job Post</button>

      {/* Modal */}

      {open && 
      
        <div className='w-90 m-auto border bg-zinc-100 border-blue-600 rounded-lg p-5 pb-6 space-y-1.5'>

            <div className='flex flex-col'>
              <label htmlFor="">Job description</label>
              <input className='border border-blue-600 rounded-lg my-1 px-4 py-2' type="text" placeholder='tell about requirements...' />
            </div>

            <div className='flex flex-col'>
              <label htmlFor="">location</label>
              <input className='border border-blue-600 rounded-lg my-1 px-4 py-2' type="text" placeholder='your address...'/>
              <button className='bg-green-500 rounded-lg p-2 my-2'>Use live Location</button>
            </div>

            <div className='flex gap-1'>
              <button onClick={() => setOpen(op => !op)} className='bg-red-500 flex-1 rounded-lg p-2'>Cancel</button> 
              <button className='bg-blue-600 flex-1 rounded-lg p-2'>Post</button> 
            </div>

        </div>
      }

    </div>
  )
}

export default PostJobs