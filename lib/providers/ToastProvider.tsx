import React from 'react'
import sonner, { Toaster } from 'sonner'

export default function ToastProvider() {
  return (
    <Toaster  position='bottom-left' className='bg-green-100' />
  )
}
