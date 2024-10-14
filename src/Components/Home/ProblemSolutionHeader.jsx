import React from 'react'
import SectionTitle from '../Common/SectionTitle'
import { Arrow } from '../Icon'

function ProblemSolutionHeader() {
  return (
    <div className='flex flex-col sm:flex-row  justify-center sm:justify-between items-center gap-5 '>
        <SectionTitle gradient="Solution">Problem & </SectionTitle>
        <div className='flex justify-center items-center gap-[15px]'>
            <button className='bg-white size-10 rounded-full text-primary flex justify-center items-center shadow-arrow-btn'>
                <Arrow></Arrow>
            </button>
            <button className='bg-gradient-primary size-10 rounded-full text-white flex justify-center items-center shadow-arrow-btn'>
                <Arrow></Arrow>
            </button>
        </div>
    </div>
  )
}

export default ProblemSolutionHeader