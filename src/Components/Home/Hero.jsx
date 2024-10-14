import React from 'react'
import Container from '../Common/Container'
import Button from '../Common/Button'

function Hero() {
  return (
    <section className='pt-10 md:pt-20 lg:pt-28 xl:pt-[142px] '>
       <Container classname='flex flex-col-reverse md:flex-row justify-center md:justify-end items-center gap-5 md:gap-0'>
       <div className=' space-y-5 md:space-y-[29px]'>
        <h1 className='font-space-grotesk font-bold text-2xl md:text-4xl  lg:text-6xl md:leading-[60px] lg:leading-[76px] max-w-[593px]'>Simplify your real estate document analysis
        </h1>
        <p className='font-semibold text-base md:text-lg lg:text-xl max-w-[450px] xl:max-w-[519px]'>Streamline, Automate, and Secure Your Business Documents with Ai GoverningDocs</p>
        <Button>Get Started Today</Button>
       </div>
       <div>
        <img src="Images/hero-side-img.png" alt="" className='mx-auto w-[80%] md:w-[550px] xl:w-[740px]' />
       </div>
       </Container>
    </section>
  )
}

export default Hero