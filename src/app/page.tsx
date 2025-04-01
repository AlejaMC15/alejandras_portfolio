import Image from "next/image";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">

        {/* Principal section */}
        <section id="home" className="flex min-h-screen items-center justify-center">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-left animate-fadeIn">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] bg-clip-text text-transparent sm:text-5xl text-shadow-purple">
                FRONTEND DEVELOPER
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                Passionate and self-taught Frontend Developer with 5 years of experience in JavaScript, TypeScript, and React. Always eager to learn, innovate, and contribute creatively.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center animate-scaleIn">
              <Image
                src="/images/ale5.png"
                alt="Foto de Alejandra"
                width={300}
                height={300}
                className="rounded-full border-4"
              />
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="scroll-mt-16"><About /></section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto p-8 scroll-mt-16">
          <h1 className="text-4xl font-bold text-blue-600">Projects</h1>
          <Projects />
        </section>

        {/* Section Contact */}
        <section id="contact" className="container mx-auto p-8 scroll-mt-16">
          <h1 className="text-4xl font-bold text-blue-600">Contact</h1>
          <Contact />
        </section>

      </main>
    </div>
  );
}
