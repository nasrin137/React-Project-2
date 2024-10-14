import React from 'react'
import Container from '../Common/Container'
import { navItems, socialIcons } from '../../LIB/DB'

function Footer() {
  return (
    <footer className='pt-5 lg:pt-24'>
        <Container>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-2.5 py-5'>
            <h1 className='font-space-grotesk text-xl sm:text-2xl lg:text-lg xl:text-4xl font-bold'>Ai GoverningDocs</h1>
            <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
          {
                    navItems.map(({label,link,i})=>(
                        <a href={link}>
                        <p className='text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150'>{label}</p>
                    </a>
                    ))
                   }

          </div>
          <div className='flex justify-center items-center gap-2.5 pr-24'>
            {
              socialIcons.map(({url,img},i)=>(
                <a href={url} target='_blank' key={i}>
                  <img src={img} className='size-[20px]' alt="" />
                </a>
              ))
            }
          </div>
          </div>
         
          <div className='footer-border-color border-t border-transparent mt-5 md:mt-[50px] lg:mt-[106px]'>
            <p className='text-lg text-center leading-[18px] text-[#111111] py-5'>Ai GoverningDocs 2024. All Rights Reserved.</p>
          </div>
        </Container>
    </footer>
  )
}

export default Footer