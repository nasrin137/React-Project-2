import React from 'react'
import Container from '../Common/Container'
import SectionTitle from '../Common/SectionTitle'
import { partners } from '../../LIB/DB'

function Partner() {
  return (
    <section className='px-2.5'>
        <Container classname="bg-[#E6F9FD] max-w-[1276px] py-[50px] px-3 rounded-[20px] ">
            <SectionTitle classname="text-center" gradient="Partners">Our </SectionTitle>
            <div className='pt-10 flex justify-center items-center flex-wrap gap-x-[30px] gap-y-7'>
                {
                    partners.map(({src},i)=>(
                        <div key={i} className='w-[274px] bg-white bprder border-[#D6D6D6] rounded-xl h-[101px] flex justify-center items-center'>
                        <img src={src} alt="" />
                    </div>
                    ))
                }
               
            </div>
        </Container>
    </section>
  )
}

export default Partner