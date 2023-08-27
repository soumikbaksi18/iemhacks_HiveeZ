import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="mt-[100px] mb-10 w-12 h-12 justify-center items-center inline-flex">
            <span className='font-bold'>LOGO</span>
        </div>
        <div className="w-[401px] h-20 flex-col justify-start items-center gap-1 inline-flex">
            <div className="text-center text-neutral-900 text-4xl font-semibold leading-[44px]">Register a new account</div>
            <div className="text-center text-neutral-900 text-lg font-normal leading-loose">Already have an account? <span className='text-[#20512E] font-semibold'><Link to={'/login'}>Log in</Link></span></div>
        </div>

        {/* form */}
        <form className="w-[525px] h-[460px] px-10 pt-16 pb-10 bg-white rounded-[20px] shadow-xl flex-col justify-start items-center gap-6 inline-flex">
            
            <div className='flex flex-col justify-center items-start'>
                <div className='font-medium'>Full Name</div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='items-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    </div>
                    <input className='w-[320px] border rounded-md p-2' type="text" placeholder='Please enter your full name..'/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-start'>
                <div className='font-medium'>Create Password</div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <div className='items-start'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                    </div>
                    <input className='w-[320px] border rounded-md p-2' type="password" placeholder='Please create password'/>
                </div>
            </div>

            <button className="w-[350px] h-14 p-4 bg-green-900 rounded-md justify-center items-center gap-2 inline-flex">
            <div className="text-white text-base font-semibold leading-normal tracking-tight">Sign up</div>
            </button>

            <div className="text-center text-gray-500 text-base font-normal leading-normal tracking-tight">Or continue with</div>

            <div className="w-[350px] h-[52px] p-3 bg-white rounded-md border border-gray-300 justify-center items-center gap-3 inline-flex">
                <img className="w-6 h-6 relative" src='/src/assets/google.png'/>
            </div>

        </form>
        

    </div>
  )
}

export default RegisterPage;
