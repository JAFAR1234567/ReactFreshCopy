import React from 'react'
import { Allproducts } from '../../Allproducts/Allproducts'
import './Menubar.css'
export const Menubar = ({add,addFunc}) => {
   
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 logo">
          logo
        </div>
        <div className="col-md-10 menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Cart <sup>{add}</sup> </a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </div>
      <Allproducts addFunc = {addFunc}></Allproducts>
    </div>
  )
}
