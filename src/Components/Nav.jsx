import {React, useState} from 'react'
import Button from './Button'

const Nav = () => {
    let Links =[
        {name:"HOME", link:"/"},
        {name:"WEB DEVELOPMENT", link:"/"},
        {name:"UI/UX", link:"/"},
        {name:"AI/ML", link:"/"},
    ]
    let [open,setOpen]= useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-6'>
            <div>
                <img src="./logo.png" alt="" width='140' />
            </div>
            <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490x]'} md:opacity-100 opacity-0`}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 pl-2 pr-4'>
                            <a href={link.link} className='text-blue-900 font-normal hover:text-gray-500'>{link.name}</a>
                        </li>
                        
                    ))
                }
                <Button>Get Started</Button>
            </ul>
            

           
        </div>
    </div>
  )
}

export default Nav