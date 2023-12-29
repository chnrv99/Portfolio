"use client";
import { Card } from "@/components/ui/card";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
      <Navbar page_name='portfolio' />
      <div className="flex flex-col items-center justify-center  overflow-hidden bg-gradient-to-tl  bg-black text-foreground ">

       
        <div className="container">
        <Particles />
        <h1 className="text-3xl bg-gradient-to-r from-blue-600 to-violet-100 text-transparent bg-clip-text font-bold  text-center border-b-2 border-violet-200 mb-28 pb-4">Experience{"!"}</h1>
      
          
          <Experience />
        <Particles />
        </div>
        <div className="container">
        <h1 className="text-3xl bg-gradient-to-r from-blue-600 to-violet-100 text-transparent bg-clip-text font-bold  text-center border-b-2 border-violet-200 mb-28 pb-4">Projects{"!"}</h1>
         
       
          <Projects />
          <Particles />
        </div>
      <Footer />
      </div>
    </>

  );
}