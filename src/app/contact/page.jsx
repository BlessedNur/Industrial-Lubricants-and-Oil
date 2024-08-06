"use client"
import Banner from '@/components/Banner/Banner'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

function page() {
  return (
    <section>
      <Navbar/>
      <Banner height={"80svh"} img={"https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} presentPage={"contact"} diff={true} text={"Contact us"}/>
      <Footer/>
    </section>
  )
}

export default page