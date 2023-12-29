"use client"
import About from '@/components/About'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Particles from '@/components/Particles'

import Image from 'next/image'

export default function Home() {

    return (
        <>
            <Navbar page_name='about' />
            <div className='flex flex-col items-center justify-center  overflow-hidden bg-gradient-to-tl  bg-black text-foreground '>


                <div className='flex items-center justify-center'>
                    <div className='self-center'>
                        <Particles />
                        <h1 className="text-3xl bg-gradient-to-r from-blue-500 to-violet-100 text-transparent bg-clip-text font-bold  text-center border-b-2 border-violet-200 mb-28 pb-4">About Me{"!"}</h1>

                        <About />
                        <Particles />
                    </div>

                </div>
                <Footer />
                




            </div>
        </>
    )
}
