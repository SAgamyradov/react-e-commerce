import React from 'react'
import { TbGenderDemiboy } from 'react-icons/tb'
import{AiOutlineMail} from 'react-icons/ai'
import {MdOutlineDarkMode} from 'react-icons/md'
import {VscBellDot} from 'react-icons/vsc'
import {MdPersonPin} from 'react-icons/md'
const BorderLog = () => {
  return (
     
     <div className="border-4 bg-white absolute right-0 top-0 w-[24rem] h-[4rem] rounded-l-3xl">
     <TbGenderDemiboy size={45} className='text-yellow-700 absolute right-[19rem] top-[0.60rem] '/>
     <AiOutlineMail size={36} className='text-yellow-700 absolute right-[16rem] top-[0.95rem]'/>
     <MdOutlineDarkMode size={36} className='text-yellow-700 absolute right-[12rem] top-[0.95rem]'/>
     <VscBellDot size={36} className='text-yellow-700 absolute right-[9rem] top-[0.95rem]'/>
     <MdPersonPin size={60} className='text-yellow-700  absolute right-7 top-0'/>
     
 </div>
  )
}

export default BorderLog