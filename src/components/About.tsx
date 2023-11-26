import Image from 'next/image'
import React from 'react'
import image1 from '../../public/Photo_two.jpeg'
type Props = {}

export default function About({ }: Props) {
    return (
        <div className="container flex lg:flex-row sm:flex-col text-white">
            <div className="container ">
                <Image src={image1} width={400} height={400} alt="Picture of the author" />
            </div>
            <div className="container  ">
                <div className="container flex-col  basis-1/3">
                    <div className="flex flex-row">
                        <h1 className='  flex flex-col basis-1/4'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                Hi1
                            </div>
                            <div className=''>
                                Hi2
                            </div>

                        </h1>
                        <h1 className='  flex flex-col basis-1/4'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                Hi1
                            </div>
                            <div>
                                Hi2
                            </div>

                        </h1>
                        <h1 className='  flex flex-col basis-1/4'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                Hi1
                            </div>
                            <div>
                                Hi2
                            </div>

                        </h1>
                        <h1 className='  flex flex-col basis-1/4'>
                            <div className='text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text'>
                                Hi1
                            </div>
                            <div>
                                Hi2
                            </div>
                        </h1>
                    </div>
                </div>


                <p className=' basis-1/3 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur tempora omnis ab aliquid at corrupti minima laboriosam quod possimus culpa repellendus earum sequi ipsa pariatur odit, molestias cumque est sint voluptatibus ipsam consequuntur rem temporibus ducimus laborum? Iusto, facere consequatur!</p>

                <p className="basis-1/6 mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iste suscipit. Autem magnam est laudantium! Molestias nostrum nisi quia possimus eum blanditiis dolor aspernatur expedita ipsum. Voluptates sint impedit, debitis accusantium nobis, dolorum natus ab aliquid alias laboriosam unde aliquam!</p>

                <p className="basis-1/6 mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iste suscipit. Autem magnam est laudantium! Molestias nostrum nisi quia possimus eum blanditiis dolor aspernatur expedita ipsum. Voluptates sint impedit, debitis accusantium nobis, dolorum natus ab aliquid alias laboriosam unde aliquam!</p>


                <p className="basis-1/6 mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iste suscipit. Autem magnam est laudantium! Molestias nostrum nisi quia possimus eum blanditiis dolor aspernatur expedita ipsum. Voluptates sint impedit, debitis accusantium nobis, dolorum natus ab aliquid alias laboriosam unde aliquam!</p>

                


            </div>

        </div>

    )
}