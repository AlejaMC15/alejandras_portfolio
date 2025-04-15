"use client";

import Image from "next/image";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Technologies from "./technologies/page";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground">
      <main className="flex flex-col items-center sm:items-start">

        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center w-full
                     bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 relative z-10 sm:px-20">

            {/* Text content */}
            <div className="md:w-1/2 animate-fadeIn text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-heading leading-tight">
                HI, I AM ALEJANDRA! <br />
                <TypeAnimation
                  sequence={[
                    "I'm a Frontend Developer", // escribe esto
                    2000,                        // espera 2s
                    "",                          // borra
                    1000,                        // espera 1s
                    "I code with passion and creativity", // escribe esto
                    2000,
                    "",
                    1000,
                    "I'm a Frontend Developer"  // vuelve al primero (loop)
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-accent"
                />
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-foreground/80 leading-relaxed font-light tracking-wide">
                Passionate and{" "}
                <span className="font-semibold text-foreground">
                  self‑taught Frontend Developer
                </span>{" "}
                with{" "}
                <span className="text-accent font-medium">
                  5 years of experience
                </span>{" "}
                in{" "}
                <span className="font-semibold">
                  JavaScript, TypeScript, and React
                </span>
                . Always eager to learn,{" "}
                <span className="text-accent font-semibold">
                  innovate
                </span>
                , and contribute creatively.
              </p>
            </div>

            {/* Photo */}
            <div className="md:w-1/2 flex justify-center animate-scaleIn">
              <Image
                src="/images/ale5.png"
                alt="Foto de Alejandra"
                width={300}
                height={300}
                className="rounded-full border-4 border-accent"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative min-h-screen w-full px-8 flex items-center
                     bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="relative z-10 w-full p-4 rounded-xl">
            <h2 className="text-4xl font-bold text-heading mb-6">About Myself</h2>
            <About />
          </div>
        </section>

        {/* Technologies Section */}
        <section
          id="technologies"
          className="relative min-h-screen w-full px-8 flex items-center
                     bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="relative z-10 w-full p-4 rounded-xl">
            <h2 className="text-4xl font-bold text-heading mb-6">Technologies</h2>
            <Technologies />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="relative min-h-screen w-full px-8 flex items-center
                     bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="relative z-10 w-full p-4 rounded-xl">
            <h2 className="text-4xl font-bold text-heading mb-6">Projects</h2>
            <Projects />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="relative min-h-screen w-full px-8 flex items-center
                     bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="relative z-10 w-full p-4 rounded-xl">
            <h2 className="text-4xl font-bold text-heading mb-6">Contact</h2>
            <Contact />
          </div>
        </section>

      </main>
    </div>
  );
}
