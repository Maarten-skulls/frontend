import React from 'react'
import { ButtonProps } from './ButtonProps'

export default function CustomButton({text}: ButtonProps) {
  return (
    <button className='px-8 py-4 bg-white text-black rounded-3xl'>
      {text}
    </button>
  )
}
