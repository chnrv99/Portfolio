import Image from 'next/image'
import React from 'react'
import image1 from '../../public/Photo_one.jpeg'
import image2 from '../../public/Photo_two.jpeg'
import image3 from '../../public/Photo_three.jpeg'
// import image4 from '../../public/Photo_four.jpeg'
import image5 from '../../public/Photo_five.jpeg'
import image6 from '../../public/Photo_six.jpeg'
type Props = {}

export default function About({ }: Props) {
    return (
        <div className="container flex lg:flex-row sm:flex-col  md:flex-col-reverse text-slate-500">
            {/* <div className="container ">
                <Image src={image1} width={400} height={400} className='rounded-md justify-center' alt="Picture of the author" />
            </div> */}

            <div className="container columns-2 sm:columns-3 gap-4 my-8">
                <div className="relative h-40 mb-4">
                    <Image
                        alt="Me being one of the volunteer at the CyberX event, conducted by VITC and Chennai Police"
                        src={image1}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80 mb-4 sm:mb-0">
                    <Image
                        alt="After a stressfull day of work :("
                        src={image2}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-[-16px] sm:object-center"
                    />
                </div>
                <div className="relative h-40 sm:h-80 sm:mb-4">
                    <Image
                        alt="Me being exicted for having fun with friends in auditorium"
                        src={image3}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover object-top sm:object-center"
                    />
                </div>
                <div className="relative h-40 mb-4 sm:mb-0">
                    <Image
                        alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
                        src={image5}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                {/* <div className="relative h-40 mb-4">
                    <Image
                        alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
                        src={image5}
                        fill
                        sizes="(max-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="relative h-80">
                    <Image
                        alt="My badge on top of a pile of badges from a Vercel meetup we held"
                        src={image6}
                        fill
                        sizes="(min-width: 768px) 213px, 33vw"
                        priority
                        className="rounded-lg object-cover"
                    />
                </div> */}
            </div>

            <div className="container  ">
                <div className="container flex-col  md:flex-row sm:flex-row  basis-1/3">
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
                        <h1 className='  flex flex-col basis-1/4 pr-3'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                Beta
                            </div>
                            <div>
                                Microsoft Learn Student Ambassador
                            </div>
                        </h1>
                    </div>
                </div>


                <p className=' basis-1/4 mt-6 pr-16 pl-4 '>The passion I have towards technology, has bought me where I am now. From building and integrating full stack apps, running DevOps, and secure code analysis, I have pushed myself in every aspect possible for the benefit of the company or project I have worked upon.</p>


                <p className="basis-1/4 mt-6  pr-16 pl-4">I also conduct events, one notable mention is where I spoke about Azure Functions and App Service integration through VSCode virtually in front of 60+ members and receieved positive responses. Our club conducted many events, where I did some major contributions from dev till management.</p>


                <p className="basis-1/4 mt-6  pr-16 pl-3">And as a cybersec enthuiast, I like to hack stuff! I am into HackTheBox and HackerOne-CTFs and constantly improving myself there. And I have contributed to open source projects, such as The Tor Project</p>


                <p className="basis-1/4 mt-6 pr-16 pl-4">I am 2X Microsoft Azure Certified{"(AZ-900 and AI-900)"}, completed Google Cloud Practitioner Course(7-8 badges), and also won a national level hackathon organised by Computer Society of India!</p>




            </div>

        </div>

    )
}