"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Link from "next/link";

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              Hey! I'm <br />
              <span className="text-accent">Joel Dominic Lobo</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a Frontend developer excelling in making digital user
              interfaces.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button href="Joel.pdf" variant="outline" size="md">
                <Link
                  href="assets/Joel.pdf"
                  target="_blank"
                  className="uppercase flex items-center gap-2"
                >
                  <span> Download CV</span>
                  <FiDownload className="text-xl" />
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
