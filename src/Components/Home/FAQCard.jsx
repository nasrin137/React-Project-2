import React from 'react'
import { Arrow } from '../Icon'

function FAQCard({q,a,onClick,isActive}) {
  return (
    <div className='shadow-faq rounded-5 py-5 px-[30px]'>
                    <button onClick={onClick} className='inline-flex justify-between items-center gap-5 w-full'>
                        <h1 className='font-bold text-lg lg:text-[26px] lg:leading-[36px] textt-secondary text-start'>{q}</h1>
                        <div className='text-primary'>
                            <Arrow classname="-rotate-90"></Arrow>
                        </div>
                    </button>
                 {isActive &&    <p className='text-accent pt-5 text-sm lg:text-base'>{a} </p>}
                </div>
  )
}

export default FAQCard