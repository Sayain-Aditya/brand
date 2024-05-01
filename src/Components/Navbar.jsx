import React from 'react'

function Navbar() {
  return (
        <nav className=' flex justify-between items-center max-w-[1180px] m-auto py-3'>
            <div className='logo'>
                <img src="/images/brand_logo.png" alt="logo" />

            </div>
            <div>
             <ul className='flex gap-[24px]'>
                <li href ="#">Menu</li>
                <li href ="#">Contacts</li>
                <li href ="#">Location</li>
                <li href ="#">About</li>
            </ul>
            </div>
            <div>
            <button className='h-[32px] bg-red-600 px-[6px] py-[4px] text-white font-[500] rounded-md text-base'>login</button>
            </div>
        </nav>
        
  )
}

export default Navbar