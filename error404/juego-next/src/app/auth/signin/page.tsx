import React from 'react'
import LoginForm from './components/LoginForm'
import Link from 'next/link'
import { url } from 'inspector'

export default function LoginPage() {
  return (
    <div className='bg-loginfoto h-screen w-full flex items-center justify-center bg-cover' >
      <div className='p-10 bg-transparent rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto'>
        <div className='p-5 bg-white rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto'>
        <h1 className='text-4xl font-semibold text-center text-neutral-900'>Login</h1>
        </div>
        <hr className='my-5'/>
        <LoginForm />
        <div className='text-sm text-center text-neutral-500 mt-5 text-white'>
          Not have an accout? <Link href={"/auth/signup"} className="font-bold text-white">Register</Link>
        </div>
      </div>
    </div>
  )
}