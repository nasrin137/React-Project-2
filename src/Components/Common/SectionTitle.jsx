import React from 'react'
import { cn } from "../../LIB/Utils";
import GradientText from './GradientText';

function SectionTitle({children,classname,gradient}) {
  return (
    <div>
        <h1 className={cn("font-space-grotesk font-bold text-2xl md:text-[35px] lg:text-[46px] md:leading-[45px] lg:leading-[58.7px]",classname)}>{children}  <GradientText>{gradient}</GradientText></h1>
    </div>
  )
}

export default SectionTitle