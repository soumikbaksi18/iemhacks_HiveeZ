import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='m-4'>
      <nav className='w-full flex justify-between items-center'>
        <div className='text-center text-green-900 text-2xl font-bold leading-9'>ALGO-BIT</div>

        <div className="w-[130px] h-[59px] px-8 py-4 bg-green-900 rounded-lg justify-center items-center gap-2 inline-flex">
          <button className="text-center text-zinc-100 text-lg font-semibold leading-[27px] cursor-pointer">
            <Link to={'/register'}>Sign up</Link>
            </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
