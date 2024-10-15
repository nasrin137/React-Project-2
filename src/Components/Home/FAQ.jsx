import React, { useState } from 'react'
import Container from '../Common/Container'
import SectionTitle from '../Common/SectionTitle'
import { Arrow } from '../Icon'
import { faqs } from '../../LIB/DB'
import FAQCard from './FAQCard'

function FAQ() {
    const [active,setActive]=useState(1);

    const handleChange = (index) =>{
        active === index? setActive(-1) : setActive(index)
    }
  return (
    <section className='mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px] relative'>
        <Container classname="max-w-[982px] relative z-10">
            <SectionTitle className="text-center" gradient="Asked Questions">
            Frequently 
            </SectionTitle>

            <div className='pt-10 space-y-5'>
                {
                    faqs.map((faq,i)=>(
                        <FAQCard key={i} {...faq} onClick={()=>handleChange(i)} isActive={active === i}></FAQCard>
                    ))
                }
               
            </div>
        </Container>
        <img src="Images/faq-bg.svg" alt="" className='absolute z-0 -top-[115px] -left-[540px] 2xl:-left-[23.8%] h-[590px] !w-[1713px]' />
    </section>
  )
}

export default FAQ