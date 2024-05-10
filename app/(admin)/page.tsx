import React from 'react'
import ProtectRoute from './components/ProtectRoute'

export default function DashBord() {
  return (
    <div className='flex justify-center items-center text-2xl h-full'>
      <ProtectRoute/>
      Welcome to Dashbord</div>
  )
}
