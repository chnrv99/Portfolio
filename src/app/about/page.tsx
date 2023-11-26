"use client"
import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Particles from '@/components/Particles'

import Image from 'next/image'

export default function Home() {
    
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl  bg-black text-foreground '>

      <Navbar />
      <div className='flex items-center justify-center'>
        <div className='self-center'>
          <Particles />
          <About />
          <Particles />
        </div>

      </div>
 ]

      


    </div>
  )
}
