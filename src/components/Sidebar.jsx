import React from 'react'
import {FaTachometerAlt,FaRegSun, FaChevronRight, FaWrench, FaChartBar, FaStickyNote, FaCalendarAlt, FaChevronLeft, FaBolt} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='h-full bg-green-400 px-[30px]'>
        <div className='px-[15px] py-[30px] flex items-center border-b-[1px] border-[#EDEDED]/[0.3]'>
            <h1 className='text-white text-[15px] leading-[24px] font-extrabold cursor-pointer'>Admin</h1>
        </div>
        <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <FaTachometerAlt color='white' />
            <p className='text-[14px] leading-[20px] font-bold text-white'>DashBoard</p>
        </div>
        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-bold leading-[16px] text-white/[0.4]'>interface</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegSun color='white' />
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>
                </div>
                <FaChevronRight color='white' />
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaChartBar color='white' />
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Chart</p>
                </div>
                <FaChevronRight color='white' />
            </div>
            
        </div>

        <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
            <p className='text-[10px] font-bold leading-[16px] text-white/[0.4]'>ADDONS</p>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaStickyNote color='white' />
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Component</p>
                </div>
                <FaChevronRight color='white' />
            </div>
            <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                <div className='flex items-center gap-[10px]'>
                    <FaWrench color='white' />
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Utilities</p>
                </div>
                <FaChevronRight color='white' />
            </div>
            <div className='flex items-center gap-[10px] py-[15px]'>
                    <FaCalendarAlt color='white' />
                    <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
        </div>
        

        <div className='bg-green-600 mt-[15px] flex items-center justify-center flex-col py-[15px] px-[10px] gap-[15px] rounded-[3px]'>
                <FaBolt color='white' />
                <p className='text-[12px] leading-[18px] font-normal text-white/[0.4] text-center'>Test</p>
                <button className='bg-blue-500 text-white flex items-center justify-center h-[30px] w-full rounded-[3px] text-[14px] leading-[21px] font-normal'>Upgrade Now </button>
        </div>
    </div>
  )
}

export default Sidebar