import React from 'react'
import { Test } from './Test'

export const Menubar = ({func}) => {
   
  return (
    <div className='text-center'>
        Menubar from menubar component
        <Test func = {func}></Test>
        </div>
  )
}
