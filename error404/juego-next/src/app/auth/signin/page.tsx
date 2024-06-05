import React from 'react'
import LoginForm from './components/LoginForm'
import Link from 'next/link'
import { url } from 'inspector'
import bgimage from '@/public/images/Age_of_Empires.png'

export default function LoginPage() {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-cover' style={{backgroundImage:`url(${bgimage})`}}>
      <div className='p-10 bg-emerald-300 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto'>
        <h1 className='text-4xl font-semibold text-center text-neutral-900'>Login</h1>
        <hr className='my-5'/>
        <LoginForm />
        <div className='text-sm text-center text-neutral-500 mt-5'>
          Not have an accout? <Link href={"/auth/signup"} className="font-bold text-neutral-900">Register</Link>
        </div>
      </div>
    </div>
  )
}