import React from 'react'

const ShimmerButton = (
  {title, icon, position, otherClasses}:
  { title :string; icon: React.ReactNode, position:string; otherClasses?:string;}
) => {
  return (
    
        // Button code
        <button className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-violet-400 bg-[linear-gradient(110deg,#000103,45%,#241e31,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors gap-2 ${otherClasses} `}>
          {position === 'left' && icon}
          {title}
          {position === 'right' && icon}
        </button>
  )
}

export default ShimmerButton