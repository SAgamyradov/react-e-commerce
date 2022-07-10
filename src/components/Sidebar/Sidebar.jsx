import React from 'react'
import { FaHome } from 'react-icons/fa'
import {BsDoorClosed} from 'react-icons/bs'
import {BsFillDoorOpenFill} from 'react-icons/bs'
import {FiSettings} from "react-icons/fi"
import {BsBasket2} from "react-icons/bs"
import { NavLink } from 'react-router-dom'
import {BsFillSuitHeartFill} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div>
      <h1 className="animate-pulse text-yellow-500 lg:text-[38px] mx-6 mt-8 font-montserrat-bold">Altyn gapy</h1>
        <NavLink to="/" className="flex items-center text-yellow-500 text-[1.3rem] p-1 m-2 mx-11 mt-11 font-montserratAlternates-medium hover:bg-slate-500  duration-700 rounded-l-full ">
           
           <FaHome size={18} className='m-1' />
           <div>Bas sahypa</div>
            </NavLink>  
        
        <NavLink to="/Home" className='flex items-center text-yellow-500 text-[1.3rem] p-1 m-2 mx-11 font-montserratAlternates-medium hover:bg-slate-500  duration-700 rounded-l-full'>
            <BsDoorClosed size={18} className='m-1'/>
            <div>Agac gapy</div>
        </NavLink>   
        
        
        <NavLink to='/Home' className='flex items-center text-yellow-500 text-[1.3rem] p-1 m-2 mx-11 font-montserratAlternates-medium hover:bg-slate-500  duration-700 rounded-l-full'>
            <BsFillDoorOpenFill size={18} className='m-1'/>
            <div >Demir gapy</div>
         </NavLink>   
           
        
        <NavLink to='/Home' className='flex items-center text-yellow-500 text-[1.3rem] p-1 m-2 mx-[2.6rem] font-montserratAlternates-medium hover:bg-slate-500 duration-700 rounded-l-full '>
            <BsBasket2 size={18} className='m-2'/>
            <div>Sebedim</div>
        </NavLink> 
          
         
         <NavLink to='/Home' className='flex items-center text-yellow-500 text-[1.3rem] p-1 m-2 mx-[2.95rem] font-montserratAlternates-medium hover:bg-slate-500  duration-700 rounded-l-full'>
            <FiSettings size={18} className='m-1'/>
            <div>Sazlamalar</div>
        </NavLink> 
          
            <BsFillSuitHeartFill size={18} className='text-red-600 lg:mx-8  absolute bottom-[2.30rem]'/><h1 className="text-white mx-16 mt-44 text-[20px] font-montserratAlternates-medium absolute bottom-8">OGUZLY 2022</h1>
                  
    </div>
  )
}

export default Sidebar