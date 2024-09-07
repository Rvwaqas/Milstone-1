'use client';
import React, { useState } from 'react'
import Image from 'next/image';
 
const Resum = () => {
 
 const [skill,setSkill]=useState(true);
 
 
    return (
    <div className='w-[100%] h-[100%] bg-gray-100 flex justify-center items-center '>
        {/* main dev start */}
        <div className='w-[85%] max-h-[100%] rounded-lg mt-[1rem]  p-[2rem]'>
            {/* personal information section start */}
            <div className=' flex justify-center md:mx-auto pb-[1rem] flex-wrap md:flex-row md:justify-between items-center p-[0.4rem] space-x-3'>

                <div className='flex flex-col space-y-1 leading-2 text-opacity-60'>
                    <h1 className='text-[25px] font-bold'>Personal Information</h1>
                    <p className='text-[15px] font-semibold text-opacity-60'>Waqas hussain</p>
                    <p className='text-[15px] font-semibold text-opacity-60'>0348 0227414</p>
                    <p className='text-[15px] font-semibold text-opacity-60'>Address:defence phase 2</p> 
                </div>
                <div className='mx-auto mt-[1rem]'>
                <Image src={"/images/img.JPG"} alt='prfilr' width={250} height={250}  className=' border border-transparent rounded-full w-[10rem] h-[10rem]' />
                </div>  
                </div>
                   <hr className='mt-[10px] bp-[10px] border border-b-gray-900 text-black text-[4px] w-[100%] h-[2px] mx-auto' /> 
            {/* personal information section end */}
            {/* Education & Exprience section start */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-[2rem]  items-center justify-between mt-[1rem]'>
                <div>
                    <label className='text-[25px] font-bold underline underline-offset-1'>Education</label>
                    <p className='text-[15px] font-semibold  text-opacity-60 '>BS Honr Software Engineering</p>
                    <p className='text-[15px] font-semibold leading-5 text-opacity-60'>GIFT UNIVERSITY GUJRANWALA</p>
                </div>
                <div className='mt-[1rem]'>
                <h1 className='text-[25px] font-bold underline underline-offset-1'>Exprience</h1>
                    <p className='text-[20px] font-semibold leading-7 text-opacity-60'>Tracking Assistant NLC</p>
                    <p className='text-[12px] font-semibold leading-7 text-opacity-60'>National logistics cell pak-army</p>
                    <p className='text-[20px] font-semibold leading-7 text-opacity-60'>Front_End Developer</p>
                    <p className='text-[12px] font-semibold leading-7 text-opacity-60'>Company ZySoftTech Islamabad</p>
                </div>

            </div>

            {/* Education & Exprience section end */}

            {/* skill section start */}
            {skill && (
                <div className='w-[100%] h-full mt-[1rem]  '>
                    <label className='text-[2rem] font-bold underline underline-offset-1'>Skills</label>
                    <ul className='list-disc list-inside mt-3'>
                        <li className='text-[20px]' >Nextjs</li>
                        <li className='text-[20px]' >React</li>
                        <li className='text-[20px]' >TypeScript</li>
                        <li className='text-[20px]' >JavaScript</li>
                        <li className='text-[20px]' >Python</li>
                    </ul>
                </div>
            )}


            {/* skill section end */}
            {/* button  */}

      <div className='w-[100%] flex justify-center items-center'>
        <button className='border border-none bg-red-600 text-black font-semibold hover:bg-green-600 transition-all duration-200 px-[2rem] py-[1rem] rounded-md block' onClick={()=>{setSkill(!skill)}}>{skill? `Hide Skill`:`ShowSkill`}</button>
      </div>

        </div>
        {/* main dev end */}
      
    </div>
  )
}

export default Resum;
