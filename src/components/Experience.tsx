import { BellIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "./ui/badge"
import Particles from "./Particles"

const notifications = [
    {
        title: "Crackube",
        description: "Auguest 2023 - November 2023",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: "2 hours ago",
    },
]

type CardProps = React.ComponentProps<typeof Card>

export default function Experience({ className, ...props }: CardProps) {
    return (
        <>
            <div className="lg:flex lg:flex-col sm:flex sm:flex-col items-center ">
                <div className="lg:container lg:flex-auto ">
                    <Card className={cn("w-auto h-auto hover:bg-slate-900 hover:text-slate-200 transition-colors", className)} {...props}>
                        <CardHeader>
                            <div className="flex justify-between">
                                <CardTitle className="flex bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text">Application Developer</CardTitle>
                                <CardDescription className="lg:flex lg:flex-row sm:flex-col md:flex-col">
                                    <Badge className="mr-2 mb-2 bg-red-200">MERN</Badge>
                                    <Badge className="mr-2 mb-2 bg-blue-200">AWS</Badge>
                                    <Badge className="mr-2 mb-2 bg-violet-200">git</Badge>
                                </CardDescription>

                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-4">

                            <div>

                                <div

                                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                    <div className="space-y-1">
                                        <p className="text-xl font-medium leading-none text-blue-100">
                                            Crackube{"(Internship)"}
                                        </p>
                                        
                                    </div>
                                </div>

                                <div

                                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                    <div className="space-y-1">

                                        <p className="text-sm text-muted-foreground">
                                            Built login/signup functionalities for google, microsoft and facebook OAuths, and contributed to custom login/signup system with JWT authentication.
                                        </p>
                                    </div>
                                </div>

                                <div

                                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                >
                                    <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                    <div className="space-y-1">

                                        <p className="text-sm text-muted-foreground">
                                            Made OTP system using Azure Graph API, and helped implement and integrate many essential core features of the app.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </CardContent>
                        <CardFooter>
                            August 2023 - November 2023
                        </CardFooter>
                    </Card>
                    <br />
                </div>
                <div className=" lg:flex md:my-2">
                    <div className="lg:container lg:flex-auto sm:flex-col md:flex-col md:my-2">
                        <Card className={cn("w-auto h-auto  hover:bg-slate-900 hover:text-slate-200 transition-colors", className)} {...props}>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle className="flex bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text">Student Ambassador</CardTitle>
                                    <CardDescription className="lg:flex lg:flex-row sm:flex-col md:flex-col">
                                        <Badge className="mr-2 mb-2 bg-slate-200">Open source</Badge>
                                        <Badge className="mr-2 mb-2 bg-green-200">Azure</Badge>
                                        <Badge className="mr-2 mb-2 bg-orange-200">Flask</Badge>
                                        
                                    </CardDescription>

                                </div>
                            </CardHeader>
                            <CardContent className="grid gap-4">

                                <div>

                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="">
                                            <p className="text-xl font-medium leading-none text-blue-100">
                                                Microsoft{"(Volunteering)"}
                                            </p>
                                            
                                        </div>
                                    </div>

                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">

                                            <p className="text-sm text-muted-foreground">
                                                Had an opportunity to showcase Azure functionalities in front of 60+ participants.
                                            </p>
                                        </div>
                                    </div>

                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">

                                            <p className="text-sm text-muted-foreground">
                                                Mentored 2 members towards their success of the program. 
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </CardContent>
                            <CardFooter>
                                January 2023 - Present
                            </CardFooter>
                        </Card>
                    </div>
                    <br />
                    <div className="lg:container lg:flex-auto md:flex-col sm:flex-col md:my-2">
                        <Card className={cn("w-auto h-auto  hover:bg-slate-900 hover:text-slate-200 transition-colors", className)} {...props}>
                            <CardHeader className="">
                                <div className="flex justify-between">
                                    <CardTitle className="flex bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text">Interim Dev Lead</CardTitle>
                                    <CardDescription className="sm:hidden md:hidden lg:flex lg:flex-row">
                                        <Badge className="mr-2 mb-2 bg-amber-200">Next.js</Badge>
                                        <Badge className="mr-2 mb-2 bg-lime-200">MERN</Badge>
                                        <Badge className="mr-2 mb-2 bg-emerald-200">Azure</Badge>
                                        <Badge className="mr-2 mb-2 bg-indigo-200">Hacking</Badge>
                                    </CardDescription>

                                </div>
                            </CardHeader>
                            <CardContent className="grid gap-4">

                                <div>

                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">
                                            <p className="text-xl font-medium leading-none text-blue-100">
                                                CYSCOM VIT{"(Club)"}
                                            </p>
                                            
                                        </div>
                                    </div>

                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">

                                            <p className="text-sm text-muted-foreground">
                                                Helped build websites and manage the events conducted by the club. Published blogs and infographics on their social media platforms.
                                            </p>
                                        </div>
                                    </div>

                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">

                                            <p className="text-sm text-muted-foreground">
                                                Hosted CTF events. Contributed to custom projects, such as club management app which we got good initial response.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </CardContent>
                            <CardFooter>
                                December 2021 - Present
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>

        </>
    )
}
