import React from 'react'
import { TwitterLogo,LinkedinLogo,GithubLogo, At } from 'phosphor-react';

const Contact = () => {
  return (
    <div className='p-4 flex justify-end'>
      <h1 className='p-2'>Contact WebLinks:</h1>
      <a className="hover:text-blue-700" href="https://www.linkedin.com/in/preetiipriya/" target='_blank'><LinkedinLogo size={32} /></a>
      <a className="hover:text-blue-700" href="https://github.com/priyaapreeti" target='_blank'><GithubLogo size={32} /></a>
      <a className="hover:text-blue-700" href="https://x.com/preetistfu" target='_blank'><TwitterLogo size={32} /></a>
      <a className="hover:text-blue-700" href="mailto:preetiipriyaa@gmail.com" target='_blank'><At size={32} /></a>
    </div>
  )
}

export default Contact;