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

const notifications = [
    {
        title: "Your call has been confirmed.",
        description: "1 hour ago",
    },
    {
        title: "You have a new message!",
        description: "1 hour ago",
    },
    {
        title: "Your subscription is expiring soon!",
        description: `<Badge className="mr-2">New</Badge>
        <Badge className="mr-2">New</Badge>
        <Badge className="mr-2">New</Badge>
        <Badge className="mr-2">New</Badge>`,
    },
]

type CardProps = React.ComponentProps<typeof Card>

export default function Projects({ className, ...props }: CardProps) {
    return (
        <>
            <div className=" flex flex-row items-center">


                <div className="container ">
                    <div className="container flex-auto">
                        <Card className={cn("w-auto h-auto", className)} {...props}>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle className="flex">Notifications</CardTitle>
                                    <CardDescription className="flex">
                                        <Badge className="mr-2">New</Badge>
                                        <Badge className="mr-2">New</Badge>
                                        <Badge className="mr-2">New</Badge>
                                        <Badge className="mr-2">New</Badge>
                                    </CardDescription>

                                </div>
                            </CardHeader>
                            <CardContent className="grid gap-4">

                                <div>
                                    {notifications.map((notification, index) => (
                                        <div
                                            key={index}
                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {notification.title}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    <Badge className="mr-2">New</Badge>
                                                    <Badge className="mr-2">New</Badge>
                                                    <Badge className="mr-2">New</Badge>
                                                    <Badge className="mr-2">New</Badge>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>

                            </CardFooter>
                        </Card>
                    </div>
                    <br />

                    <div className="flex">

                        <div className="container flex-auto ">
                            <Card className={cn("w-auto h-auto", className)} {...props}>
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <CardTitle className="flex">Notifications</CardTitle>
                                        <CardDescription className="flex">
                                            <Badge className="mr-2">New</Badge>
                                            <Badge className="mr-2">New</Badge>
                                            <Badge className="mr-2">New</Badge>
                                            <Badge className="mr-2">New</Badge>
                                        </CardDescription>

                                    </div>
                                </CardHeader>
                                <CardContent className="grid gap-4">

                                    <div>
                                        {notifications.map((notification, index) => (
                                            <div
                                                key={index}
                                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                            >
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        {notification.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {notification.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>

                                </CardFooter>
                            </Card>
                        </div>
                        <br />

                        <div className="container flex-auto ">
                            <Card className={cn("w-auto h-auto", className)} {...props}>
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <CardTitle className="flex">Notifications</CardTitle>
                                        <CardDescription className="flex">
                                            <Badge className="mr-2">New</Badge>
                                            <Badge className="mr-2">New</Badge>
                                            <Badge className="mr-2">New</Badge>
                                            <Badge className="mr-2">New</Badge>
                                        </CardDescription>

                                    </div>
                                </CardHeader>
                                <CardContent className="grid gap-4">

                                    <div>
                                        {notifications.map((notification, index) => (
                                            <div
                                                key={index}
                                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                            >
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        {notification.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {notification.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>

                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <br />

                    <div className="container flex-auto ">
                        <Card className={cn("w-auto h-auto", className)} {...props}>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle className="flex">Notifications</CardTitle>
                                    <CardDescription className="flex">
                                        <Badge className="mr-2">New</Badge>
                                        <Badge className="mr-2">New</Badge>
                                        <Badge className="mr-2">New</Badge>
                                        <Badge className="mr-2">New</Badge>
                                    </CardDescription>

                                </div>
                            </CardHeader>
                            <CardContent className="grid gap-4">

                                <div>
                                    {notifications.map((notification, index) => (
                                        <div
                                            key={index}
                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {notification.title}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {notification.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>

                            </CardFooter>
                        </Card>
                    </div>
                    <br />


                </div>
            </div>
            <br />
        </>
    )
}
