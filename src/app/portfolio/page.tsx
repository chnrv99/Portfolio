"use client";
import { Card } from "@/components/ui/card";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center  overflow-hidden bg-gradient-to-tl  bg-black text-foreground ">

        <br />
        <br />
        <br />
        <br />
        <div className="container">
          

          <Experience />
        </div>
        <br />
        <br />
        <div className="container">
         

          <Projects />
        </div>

      </div>
    </>

  );
}