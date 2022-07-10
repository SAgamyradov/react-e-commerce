import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
const Input = () => {
  return (
    <div className='lg:text-2xl font-montserratAlternates-medium absolute right-[26rem] top-6'>
          <BiSearchAlt size={32} className='rotate-90 absolute top-[0.15rem]' />
         <input  type='text' placeholder="gozle......" className=" px-12 w-96 h-9 rounded-full " />
    </div>
  )
}

export default Input