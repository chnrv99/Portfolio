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
            <div className=" flex flex-row items-center">
                <div className="container flex-auto ">
                    <Card className={cn("w-auto h-auto", className)} {...props}>
                        <CardHeader>
                            <div className="flex justify-between">
                                <CardTitle className="flex">Application Developer</CardTitle>
                                <CardDescription className="flex">
                                    <Badge className="mr-2 bg-red-800">MERN Stack</Badge>
                                    <Badge className="mr-2">AWS</Badge>
                                    <Badge className="mr-2">git</Badge>
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
                                        <p className="text-xl font-medium leading-none">
                                            Crackube
                                        </p>
                                        <p className="text-sm text-muted-foreground">

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
                </div>
                <div className="container ">
                    <div className="container flex-auto">
                        <Card className={cn("w-auto h-auto", className)} {...props}>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle className="flex">Student Ambassador</CardTitle>
                                    <CardDescription className="flex">
                                        <Badge className="mr-2">Azure</Badge>
                                        <Badge className="mr-2">Open source</Badge>
                                        <Badge className="mr-2">Flask</Badge>
                                        
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
                                            <p className="text-xl font-medium leading-none">
                                                Microsoft
                                            </p>
                                            <p className="text-sm text-muted-foreground">

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
                    <div className="container flex-auto">
                        <Card className={cn("w-auto h-auto", className)} {...props}>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle className="flex">Interim Dev Lead</CardTitle>
                                    <CardDescription className="flex">
                                        <Badge className="mr-2">Next.js</Badge>
                                        <Badge className="mr-2">MERN</Badge>
                                        <Badge className="mr-2">Azure</Badge>
                                        <Badge className="mr-2">Hacking</Badge>
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
                                            <p className="text-xl font-medium leading-none">
                                                CYSCOM VIT
                                            </p>
                                            <p className="text-sm text-muted-foreground">

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
