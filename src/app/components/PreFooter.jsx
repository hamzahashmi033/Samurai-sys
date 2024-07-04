import React from 'react'

const PreFooter = ( {p1, span1, h1, h2, p2, btn} ) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex flex-col items-center p-8 lg:p-16 drop-shadow-2xl">
        <div className="flex items-center gap-5">
          <p className='border border-[#0B0A0A] h-px w-[5rem] ml-2 hidden sm:block lg:hidden xl:block'/>
          <p className='font-light text-sm sm:text-base lg:text-lg'>{p1}</p>
        </div>
        <h1 className='font-normal text-2xl sm:text-3xl lg:text-4xl'><span className='text-[#C92127]'>{span1}</span> {h1}</h1>
        <h2 className='font-medium text-xl sm:text-2xl lg:text-3xl'>{h2}</h2>
        <p className='w-full sm:w-[80%] lg:w-[976px] text-center mt-5 font-normal text-sm sm:text-base lg:text-lg'> {p2} </p>
        
      </div>
    </>
  )
}

export default PreFooter