import React from 'react'
import Container from '../Common/Container'
import ProblemSolutionHeader from './ProblemSolutionHeader'
import ProblemSolutionCard from './ProblemSolutionCard'
import { problemSolutions } from '../../LIB/DB'

function ProblemSolution() {
  return (
    <section className='pt-32'>
        <Container>
        <ProblemSolutionHeader></ProblemSolutionHeader>
        <div className='pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-[30px]'>
           {
            problemSolutions.map((problem,i)=>(
                <ProblemSolutionCard {...problem} key={i}></ProblemSolutionCard>
            ))
           }
        </div>
        </Container>
    </section>
  )
}

export default ProblemSolution