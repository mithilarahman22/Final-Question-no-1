import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Layoutm = () => {
  return (
    <>
     <Navbar></Navbar> 
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default Layoutm