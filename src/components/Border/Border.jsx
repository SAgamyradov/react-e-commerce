import React from 'react'
import bgimage from '../../assets/pictures/door.jpg'
const Border = () => {
  return (
          <div className="border-1 bg-white p-9 absolute -left-5 xl:left-60 bottom-0 right-0 top-16 rounded-l-[4rem] ">
     <img alt="" src={bgimage} className='w-screen h-full rounded-3xl'/>
  </div>
  )
}

export default Border