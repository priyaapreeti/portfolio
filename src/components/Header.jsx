import React from 'react'

const Header = () => {
  return (
    <nav>
        <ul className='flex text-blue-800 rounded-xl p-2'>
            <li className='p-2  hover:bg-transparent rounded-lg hover:text-blue-500'>
                <a href="/">Home</a>
            </li>
            <li className='p-2 hover:bg-transparent rounded-lg hover:text-blue-500'>
                <a href="#projects">Projects</a>
            </li>
            <li className='p-2 hover:bg-transparent rounded-lg hover:text-blue-500'>
                <a href="https://github.com/priyaapreeti" target='_blank'>Github</a>
            </li>
            <li className='p-2 hover:bg-transparent rounded-lg hover:text-blue-500'>
                <a href="#resume">Resume</a>
            </li>
            <li className='p-2 hover:bg-transparent rounded-lg hover:text-blue-500'>
                <a href="#contact">Contact me</a>
            </li>
        </ul>
    </nav>
  )
}

export default Header