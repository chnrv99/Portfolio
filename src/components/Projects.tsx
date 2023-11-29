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
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"


type CardProps = React.ComponentProps<typeof Card>

export default function Projects({ className, ...props }: CardProps) {
    return (
        <>
            <div className="lg:flex lg:flex-row sm:flex sm:flex-col items-center ">


                <div className="lg:mr-4 ">
                    <div className="lg:container flex-auto">
                        <Card className={cn("w-auto h-auto  hover:bg-slate-900 hover:text-slate-200 transition-colors", className)} {...props}>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle className="flex bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text">Zypher App</CardTitle>
                                    <CardDescription className="flex">
                                        <GitHubLogoIcon width={25} height={25} className="mx-2" />
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

                                            <p className="text-sm text-muted-foreground">
                                               Built a fully functional app for a CTF styled event according to a complex plotline. Also built a custom admin panel which has the power to edit any team details or CTF challenge. Had over 100+ users using the app without any hiccups.
                                            </p>
                                        </div>
                                    </div>
                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">

                                            <p className="text-sm text-muted-foreground">
                                                Oversaw and helped a team of 12 people in frontend for the landing page and the game UI. Integrated the frontend with backend securely and efficiently.
                                            </p>
                                        </div>
                                    </div>
                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">

                                            <p className="text-sm text-muted-foreground">
                                                Deployed the app in Azure App service{`(Node.js-expess)`} and Static Web Apps{`(HTML-CSS)`}.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        <Badge className="mr-2 bg-slate-200">Node.js</Badge>
                                        <Badge className="mr-2 bg-gray-200">Express</Badge>
                                        <Badge className="mr-2 bg-violet-200">Azure</Badge>
                                        <Badge className="mr-2 bg-sky-200">JWT</Badge>
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quod, obcaecati repellendus deserunt perferendis consequatur eaque animi illum maxime laudantium nam praesentium odit vitae dolorem.</p> */}
                            </CardFooter>
                        </Card>
                    </div>
                    <br />

                    <div className="lg:flex lg:flex-row md:flex-col">

                        <div className="lg:container flex-auto ">
                            <Card className={cn("w-auto h-auto hover:bg-slate-900 hover:text-slate-200 transition-colors", className)} {...props}>
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <CardTitle className="flex bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text">News Tonality App</CardTitle>
                                        <CardDescription className="flex">
                                            <GitHubLogoIcon width={25} height={25} className="mx-2" />
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

                                                <p className="text-sm text-muted-foreground">
                                                    An app which can sense any latest news in the wild, and can classify it into positive, negative or neutral tonality. Used 3 different news APIs to achive it.
                                                </p>
                                            </div>
                                        </div>
                                        <div

                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                            <div className="space-y-1">

                                                <p className="text-sm text-muted-foreground">
                                                    Helped build a custom intuitive UI which displays the findings, built a fully functional backend which connects the UI and the ML models, and made an automated alert system which can notify the police if the news is against the goverment.
                                                </p>
                                            </div>
                                        </div>
                                        <div

                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                            <div className="space-y-1">

                                                <p className="text-sm text-muted-foreground">
                                                    Integrated PowerBI for powerful analytics, and deployed it in Azure App service for the app and CosmosDB for PostgreSQL.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            <Badge className="mr-2 bg-green-200">Flask</Badge>
                                            <Badge className="mr-2 bg-pink-200">Tensorflow</Badge>
                                            <Badge className="mr-2 bg-yellow-200">Azure</Badge>
                                            <Badge className="mr-2 bg-cyan-200">News APIs</Badge>
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quod, obcaecati repellendus deserunt perferendis consequatur eaque animi illum maxime laudantium nam praesentium odit vitae dolorem.</p> */}
                                </CardFooter>
                            </Card>
                        </div>
                        <br />

                        <div className="lg:container flex-auto ">
                            <Card className={cn("w-auto h-auto hover:bg-slate-900 hover:text-slate-200 transition-colors", className)} {...props}>
                                <CardHeader>
                                    <div className="flex justify-between">
                                        <CardTitle className="flex bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text">Dark Web Crawler</CardTitle>
                                        <CardDescription className="flex">
                                            <GitHubLogoIcon width={25} height={25} className="mx-2" />
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

                                                <p className="text-sm text-muted-foreground">
                                                    A custom built crawler, which can index 20-30 .onion sites per minute. It can classify them into drugs, weapons, CP, etc. It can also extract the links from the site and crawl them too. Made a custom dataset about 200 entries for the model.
                                                </p>
                                            </div>
                                        </div>
                                        <div

                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                            <div className="space-y-1">

                                                <p className="text-sm text-muted-foreground">
                                                    Added capability to make an informative report on any website, for example, say the weapon details and price sold in the website and create a classified Word document for the same.
                                                </p>
                                            </div>
                                        </div>
                                        <div

                                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                        >
                                            <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                            <div className="space-y-1">

                                                <p className="text-sm text-muted-foreground">
                                                    The crawler can also search for any human name in the wild{`(for human trafficking purposes)`}, and can enumerate any website given to a certain extent.
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            <Badge className="mr-2 bg-red-200">Python</Badge>
                                            <Badge className="mr-2 bg-indigo-200">Requests</Badge>
                                            <Badge className="mr-2 bg-purple-200">Controller</Badge>
                                            <Badge className="mr-2 bg-fuchsia-200">Tensorflow</Badge>
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quod, obcaecati repellendus deserunt perferendis consequatur eaque animi illum maxime laudantium nam praesentium odit vitae dolorem.</p> */}
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <br />

                    <div className="lg:container flex-auto ">
                        <Card className={cn("w-auto h-auto hover:bg-slate-900 hover:text-slate-200 transition-colors", className)} {...props}>
                            <CardHeader>
                                <div className="flex justify-between">
                                    <CardTitle className="flex bg-gradient-to-r from-blue-900 to-blue-300 text-transparent bg-clip-text">Club Management App</CardTitle>
                                    <CardDescription className="flex">
                                        <GitHubLogoIcon width={25} height={25} className="mx-2" />
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

                                            <p className="text-sm text-muted-foreground">
                                                Built a custom app using role-based-authentication(8+ roles) and authorization. The highest priviledge user{`(admin)`} can assign task to a least priviledged user{`(member)`}, member can submit the assigned task, admin can then review the task submitted by the member and approve it.
                                            </p>
                                        </div>
                                    </div>
                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">

                                            <p className="text-sm text-muted-foreground">
                                                A neat, intuitive and powerful table, with 7 sorting capabilities is used to display the tasks assigned to the member. The member can also filter the tasks based on the status of the task.
                                            </p>
                                        </div>
                                    </div>
                                    <div

                                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                    >
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full" />
                                        <div className="space-y-1">

                                            <p className="text-sm text-muted-foreground">
                                                Implemented for all departments, based on the department the user belongs to, the user can view the tasks assigned to him/her. Similarly goes to the leads and core members.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground">
                                        <Badge className="mr-2 bg-rose-200">Next.js</Badge>
                                        <Badge className="mr-2 bg-yellow-200">Next-Auth</Badge>
                                        <Badge className="mr-2 bg-zinc-200">ShadCN-UI</Badge>
                                        <Badge className="mr-2 bg-gray-200">TanStack</Badge>
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter>
                                {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quod, obcaecati repellendus deserunt perferendis consequatur eaque animi illum maxime laudantium nam praesentium odit vitae dolorem.</p> */}
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
