import React, { useState } from 'react'
import SectionTitle from '../Common/SectionTitle'
import Container from '../Common/Container'
import ReviewCard from './ReviewCard'
import { reviews } from '../../LIB/DB'
import { Star } from '../Icon'
import { cn } from '../../LIB/Utils'

function Review() {
    const[active,setActive] = useState(1)

    const activeReview = reviews[active]
  return (
    <section className='my-[50px] sm:my-20 lg:my-[100px] xl:my-[150px] bg-[#F6F6F6] lg:py-20'>
        <Container>
        <SectionTitle classname="text-center" gradient="Our Client">Reviews From </SectionTitle>
        <div className='pt-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-[93px]'>
            <div className='flex w-full gap-5'>
                {/* review line */}
          <div className='bg-[#E2DED8] w-[5px] rounded-[50px]'>
          <div className='space-y-[15px]'>
          {
            Array.from(Array(3).keys()).map((el)=>(<div key={el} className={cn('w-[5px] h-[92px] rounded-[20px] bg-transparent',active===el && "bg-gradient-primary")}></div>))
                    }

            </div>
          </div>
            {/* review list */}
            <div className='space-y-[15px] flex-grow'>
                {
                    reviews.map((review,i)=><ReviewCard key={i} {...review}  active={(active===i)} onClick={()=>setActive(i)}></ReviewCard>)
                }
               
            </div>
            </div>
            {/* review details */}
            <div className='space-y-[30px] w-full'>
                <h1 className='font-bold text-[30px]'>{activeReview.review.title}</h1>
                <div className='flex flex-row justify-center items-center gap-[5px]'>
                    {
                        Array.from(Array(activeReview.review.stars).keys()).map((el)=>(<Star key={el}></Star>))
                    }
                </div>
                <p className='text-base text-accent max-w-[500px]'>{activeReview.review.details}</p>
            </div>
        </div>
        </Container>
    </section>
  )
}

export default Review