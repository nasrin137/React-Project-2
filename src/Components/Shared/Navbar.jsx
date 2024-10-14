import React, { useState } from 'react'
import Container from '../Common/Container'
import Logo from './Logo'
import Button from '../Common/Button'
import { navItems } from '../../LIB/DB'
import MobileMenu from './MobileMenu'

function  Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    const toggleMenu = ()=> setIsMenuOpen(!isMenuOpen)
  return (
    <nav className='py-5'>
        <Container>
            <div className='flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full'>
                <Logo></Logo>
                <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
                   {
                    navItems.map(({label,link,i})=>(
                        <a href={link}>
                        <p className='text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150'>{label}</p>
                    </a>
                    ))
                   }
                </div>
                <div className='flex justify-center items-center gap-2.5'>
                    <button onClick={toggleMenu} className='lg:hidden block text-accent'>
                        <div className='space-y-1'>
                            <span className='block w-6 h-0.5 bg-black'></span>
                            <span className='block w-6 h-0.5 bg-black'></span>
                            <span className='block w-6 h-0.5 bg-black'></span>

                        </div>
                    </button>
                    <Button>Get Started Today</Button>
                </div>
            </div>
            {isMenuOpen && <MobileMenu toggleMenu={toggleMenu}></MobileMenu>}
        </Container>
    </nav>
  )
}

export default Navbar