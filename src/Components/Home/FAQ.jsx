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
    <section className='mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px]'>
        <Container classname="max-w-[982px]">
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
    </section>
  )
}

export default FAQ