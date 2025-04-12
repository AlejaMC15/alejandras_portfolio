import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "UI Dashboard",
      description: "A modern dashboard with interactive charts and dark mode.",
      image: "/images/ale.jpg",
    },
    {
      title: "E-commerce Platform",
      description: "A seamless shopping experience with smooth animations.",
      image: "/images/ale2.jpg",
    },
    {
      title: "Portfolio Website",
      description: "A creative portfolio with dynamic sections and animations.",
      image: "/images/ale3.jpg",
    },
  ];

  return (
    <section id="projects" className="container mx-auto p-8">
      <div className="flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center gap-8 p-6 transition transform hover:scale-105 hover:shadow-xl ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
          >
            {/* Imagen */}
            <div className="relative w-full md:w-1/2">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg transition duration-300 hover:scale-110"
              />
              {/* Caja de texto flotante con borde y color llamativo */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 p-6 rounded-lg w-[90%] md:w-[90%] backdrop-blur-lg bg-background/60
                ${index % 2 === 0
                    ? "left-0 md:left-[90%] border-l-4 border-b-4 border-heading"
                    : "right-0 md:right-[90%] border-r-4 border-b-4 border-accent"
                  }`}
              >
                <h3 className="text-2xl font-bold text-heading">{project.title}</h3>
                <p className="text-subtext dark:text-foreground text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
