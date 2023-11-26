import Image from 'next/image'
import React from 'react'
import image1 from '../../public/Photo_two.jpeg'
type Props = {}

export default function About({ }: Props) {
    return (
        <div className="container flex lg:flex-row sm:flex-col text-slate-300">
            <div className="container ">
                <Image src={image1} width={400} height={400} className='rounded-md justify-center' alt="Picture of the author" />
            </div>
            <div className="container  ">
                <div className="container flex-col  basis-1/3">
                    <div className="flex flex-row">
                        <h1 className='  flex flex-col basis-1/4'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                4+
                            </div>
                            <div className=''>
                                Months of Work Experience
                            </div>

                        </h1>
                        <h1 className='  flex flex-col basis-1/4'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                750+
                            </div>
                            <div>
                                Contributions in GitHub
                            </div>

                        </h1>
                        <h1 className='  flex flex-col basis-1/4'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                Hacker
                            </div>
                            <div>
                                Rank in HackTheBox
                            </div>

                        </h1>
                        <h1 className='  flex flex-col basis-1/4'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                Beta
                            </div>
                            <div>
                                Microsoft Learn Student Ambassador
                            </div>
                        </h1>
                    </div>
                </div>

                
                <p className=' basis-1/4 mt-6 '>The passion I have towards technology, has bought me where I am now. From building and integrating full stack apps, running DevOps, and secure code analysis, I have pushed myself in every aspect possible for the benefit of the company or project I have worked upon.</p>

                
                <p className="basis-1/4 mt-6 ">I also conduct events, one notable mention is where I spoke about Azure Functions and App Service integration through VSCode virtually in front of 60+ members and receieved positive responses. Our club conducted many events, where I did some major contributions from dev till management.</p>

                
                <p className="basis-1/4 mt-6">And I like to hack stuff! I am into HackTheBox and HackerOne-CTFs and constantly improving myself there.</p>

                
                <p className="basis-1/4 mt-6 ">I am 2X Microsoft Azure Certified{"(AZ-900 and AI-900)"}, completed Google Cloud Practitioner Course(7-8 badges), and also won a national level hackathon organised by Computer Society of India!</p>

                


            </div>

        </div>

    )
}