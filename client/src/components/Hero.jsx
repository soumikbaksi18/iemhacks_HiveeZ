import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='flex justify-center items-center flex-col'>
        <div className="w-[1126px] mt-8 text-center text-green-900 text-[56px] font-semibold leading-[84px]">We empower agriculture by helping you make smarter choices</div>

          <p className="w-[1126px] mt-4 text-center text-zinc-700 text-lg font-semibold leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
        </div>
    
        <div className="w-[217px] h-[59px] px-8 py-4 bg-green-900 rounded-lg justify-center items-center gap-2 inline-flex mt-8">
            <div className="text-center text-zinc-100 text-lg font-semibold leading-[27px] cursor-pointer">Get started today</div>
        </div>
        <div className='mt-[20px] flex justify-center items-end '>
            <video className='w-[368px] h-[368px]' autoPlay loop src="src/assets/heroanimation.mp4"/>
        </div>
    </div>
  )
}

export default Hero
