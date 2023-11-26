import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Hero({ }: Props) {
    return (
        <>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text text-center">
                chnrv
            </h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    I'm building{" "}
                    <Link
                        target="_blank"
                        href="https://unkey.dev"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        unkey.dev
                    </Link> to solve API authentication and authorization for developers.
                </h2>
            </div>
        </>
    )
}