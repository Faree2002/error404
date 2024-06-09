import React from 'react'
import RegisterForm from './components/RegisterForm'
import Link from 'next/link'


export default function SignUpPage() {
  return (
    <div className='bg-loginfoto h-screen w-full flex items-center justify-center bg-cover' >
      <div className='p-10 bg-transparent rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto'>
      <div className='p-5 bg-white rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto'>
        <h1 className='text-4xl font-semibold text-center text-neutral-900'>Register</h1>
        </div>
        <hr className='my-5'/>
        <RegisterForm />
        <div className='text-sm text-center text-neutral-500 mt-5 text-white'>
          Have an accout? <Link href={"/auth/signin"} className="font-bold text-white">Login</Link>
        </div>
      </div>
    </div>
  )
}
