import React, { useState } from 'react'
import { FaEnvelope, FaRegBell, FaSearch, FaUserAlt } from 'react-icons/fa'

const Dasboardview = () => {
    const [open, setOpen] = useState(false)

    const showDropDown =() =>{
        setOpen(!open)
    }
  return (
    <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
        <div className='flex items-center rounded-[5px]'>
            <input type='text' className='bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px font-normal]' placeholder='Search for' />
            <div className='bg-green-300 h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-br-[5px]'>
                <FaSearch color='black' />
            </div>
        </div>

        <div className='flex items-center gap-[15px] relative'>
            <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                <FaRegBell />
                <FaEnvelope />
            </div>
            <div className='flex items-center gap-[15px] relative' onClick={showDropDown}>
                <p>Douglas Mcgee</p>
                <div className='h-[50px] w-[50px] rounded-full bg-green-300 cursor-pointer flex items-center justify-center relative'>
                    <FaUserAlt />
                </div>
                {

                    open &&
                    <div className='bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]'>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Profile</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Setting</p>
                        <p className='cursor-pointer hover:text-[blue] font-semibold'>Log out</p>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Dasboardview