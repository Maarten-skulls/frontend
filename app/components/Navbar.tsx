import React from 'react'
import CustomButton from './button/CustomButton'

const Navbar = () => {
  return (
    <header className='p-10 z-10 bg-transparent fixed w-full'>
      <div className='block max-w-screen-xl m-auto'>
        <nav className='flex content-center justify-between items-center'>
            <div>Logo</div>
            <ul className='flex gap-8'>
                <li><a href='menu item 1'>Menu Item 1</a></li>
                <li><a href='menu item 1'>Menu Item 2</a></li>
                <li><a href='menu item 1'>Menu Item 3</a></li>
                <li><a href='menu item 1'>Menu Item 4</a></li>
            </ul>
            <div>
                <CustomButton text='Contact Me'/>
            </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar