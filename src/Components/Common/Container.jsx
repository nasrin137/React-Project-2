import { cn } from "../../LIB/Utils";

function Container({children,classname}) {
  return (
    <div className={cn("w-full max-w-screen-xl mx-auto px-2.5",classname)}>
        {children}
    </div>
  )
}

export default Container