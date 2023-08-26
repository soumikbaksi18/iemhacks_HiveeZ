import React from 'react'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <div>
        <div className="mt-[90px] text-center text-green-900 text-[40px] font-semibold leading-[60px]">Features</div>

            <div className='flex flex-row pt-6 gap-4 justify-center'>
                
                <div className="w-[542px] h-[583px] relative bg-green-950 bg-opacity-80 rounded-3xl drop-shadow-2xl" style={{
                    backgroundImage: `url(/src/assets/feature1.jpg)`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                        }}>
                <div className="w-[488px] left-[27px] top-[64px] absolute text-center text-gray-200 text-[40px] font-bold leading-[60px]">Crop recommendation System</div>
                <div className="w-[488px] left-[27px] top-[245px] absolute text-center text-gray-200 text-lg font-semibold leading-[27px]">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>
                <div className="w-[488px] px-8 py-4 left-[27px] top-[500px] absolute hover:bg-zinc-100 border border-zinc-100 text-white rounded-lg justify-center items-center gap-2 inline-flex hover:text-green-900">
                <div className="text-center hover:text-green-900 text-lg font-semibold leading-[27px] cursor-pointer">Sign up Today</div>
                </div>
                </div>

                <div className="w-[541px] h-[583px] relative bg-green-950 bg-opacity-80 rounded-3xl drop-shadow-2xl" style={{
                    backgroundImage: `url(/src/assets/feature2.jpg)`,
                    backgroundSize: 'cover',
                    backgroundBlendMode: 'multiply',
                        }}>
                    <div className="w-[488px] left-[27px] top-[64px] absolute text-center text-gray-200 text-[40px] font-bold leading-[60px]">Yield Tracking dashboard</div>
                    <div className="w-[488px] left-[27px] top-[245px] absolute text-center text-gray-200 text-lg font-semibold leading-[27px]">Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>
                    <div className="w-[488px] px-8 py-4 left-[27px] top-[500px] text-white absolute hover:bg-zinc-100 rounded-lg border border-zinc-100 justify-center items-center gap-2 inline-flex hover:text-green-900">
                        <div className="text-center text-lg font-semibold leading-[27px] hover:text-green-900 cursor-pointer">Coming Soon</div>
                    </div>
                </div>

            </div>

            <div className="mt-[100px] text-center text-green-900 text-[40px] font-semibold leading-[60px]">Make smarter choices through data driven insights</div>

            <div className=" my-[60px] w-[217px] h-[59px] px-8 py-4 bg-green-900 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className="text-center text-zinc-100 text-lg font-semibold leading-[27px] cursor-pointer"><Link to={'/register'}>Get started today</Link></div>
            </div>
    </div>
  )
}

export default Feature
