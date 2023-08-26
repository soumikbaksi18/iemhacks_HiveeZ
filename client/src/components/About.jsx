import React from 'react'

const About = () => {
  return (
    <div>
        <div className="mt-[90px] text-center text-green-900 text-[40px] font-semibold leading-[60px] ">What we do</div>

        <div className="w-[1099px] h-[466px] pl-[59px] pr-[58px] bg-black  rounded-3xl justify-center items-center inline-flex mt-8 opacity-90 relative" style={{
          backgroundImage: `url(/src/assets/about.jpg)`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'normal',
          }}>
            <div className="w-[982px] text-center text-gray-200 text-lg font-semibold leading-[27px] absolute">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>
        </div>

    </div>
  )
}

export default About
