import React from 'react'

const Card = () => {
  return (
    <div className='p-2 '>
      <div className='border hover:scale-[] rounded p-5 cursor-pointer flex flex-col justify-center items-center'>
        <img src="" alt="project-img" />
        <p className='font-bold'>title</p>
        <p className='font-thin'>desc</p>
        <button className=''>link</button>
      </div>
    </div>
  ) 
}  

export default Card