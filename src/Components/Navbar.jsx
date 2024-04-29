import React from 'react'

function Navbar() {
  return (
        <nav className='w-full h-auto'>
            <div className='logo'>
                <img src="/images/brand_logo.png" alt="logo" />

            </div>
            <div>
             <ul className='flex '>
                <li href ="#">Menu</li>
                <li href ="#">Contacts</li>
                <li href ="#">Location</li>
                <li href ="#">About</li>
            </ul>
            <button>login</button>
            </div>
        </nav>
  )
}

export default Navbar