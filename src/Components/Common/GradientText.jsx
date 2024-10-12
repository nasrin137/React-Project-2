import React from 'react'
import { cn } from '../../LIB/Utils'

function GradientText({children,classname}) {
  return (
    <span className={cn("bg-gradient-to-b from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent",classname)}>
        {children}
    </span>
  )
}

export default GradientText