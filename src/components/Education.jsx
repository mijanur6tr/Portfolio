import React from 'react'

/**
* @author
* @function Education
**/

export const Education = (props) => {
  return(
    <div className='border-b border-neutral-900 py-4'>
        <h2 className='text-center my-20 text-4xl'>Education</h2>
    <div className='flex flex-col gap-8 justify-center px-18 py-5  items-start font-light'>
        <div className='relative text-base lg:text-2xl'>
        <span class="absolute -left-[13px] top-0 w-[4px] h-[45px] rounded-md bg-amber-600 border-2 border-gray-900"></span>
        <h4>2023-present</h4>
        <h3>Bachelor Of Science-Engg.</h3>
        <p>Department of Industrial Engineering and Management</p>
        <p>Khulna University of Engineering and Technology~KUET</p>
        </div>
        <div className='relative text-base lg:text-2xl'>
        <span class="absolute -left-[13px] top-0 w-[4px] h-[45px] rounded-md bg-amber-600 border-2 border-gray-900"></span>
        <h4>2021-2023</h4>
        <h3>Higher Secondary Certificate</h3>
        <p>GPA : 5.00</p>
        <p>Meherpur Govt. College</p>
        </div>
        <div className='relative text-base lg:text-2xl'>
        <span class="absolute -left-[13px] top-0 w-[4px] h-[45px] rounded-md bg-amber-600 border-2 border-gray-900"></span>
        <h4>Batch-2021</h4>
        <h3>Secondary School Certificate</h3>
        <p>GPA : 5.00</p>
        <p>Meherpur Govt. High School</p>
        </div>
    </div>
    </div>
   )
  }
