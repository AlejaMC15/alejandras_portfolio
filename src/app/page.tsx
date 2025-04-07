import Image from "next/image";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Technologies from "./technologies/page";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold text-blue-600 mb-6">{children}</h2>
);

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start">

        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center w-full bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8 relative z-10 sm:px-20">

            {/* Text content */}
            <div className="md:w-1/2 animate-fadeIn text-left">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--secondary-color)] to-[var(--primary-color)] bg-clip-text text-transparent">
                HI, I AM ALEJANDRA! FRONTEND DEVELOPER
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-gray-300 leading-relaxed font-light tracking-wide">
                Passionate and <span className="font-semibold text-white">self-taught Frontend Developer</span> with
                <span className="text-[var(--primary-color)] font-medium"> 5 years of experience</span> in
                <span className="font-semibold"> JavaScript, TypeScript, and React</span>. Always eager to learn,
                <span className="text-[var(--accent-color)] font-semibold"> innovate</span>, and contribute creatively.
              </p>
            </div>

            {/* Photo */}
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

        {/* About Section */}
        <section
          id="about"
          className="relative min-h-screen w-full px-8 flex items-center bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="relative z-10 w-full">
            <SectionTitle>About Myself</SectionTitle>
            <About />
          </div>
        </section>

        {/* Technologies Section */}
        <section
          id="technologies"
          className="relative min-h-screen w-full px-8 flex items-center bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="relative z-10 w-full">
            <SectionTitle>Technologies</SectionTitle>
            <Technologies />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative min-h-screen w-full px-8 flex items-center bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="relative z-10 w-full">
            <SectionTitle>Projects</SectionTitle>
            <Projects />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative min-h-screen w-full px-8 flex items-center bg-[url('/images/background-one.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="relative z-10 w-full">
            <SectionTitle>Contact</SectionTitle>
            <Contact />
          </div>
        </section>

      </main>
    </div>
  );
}
