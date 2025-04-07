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
            className={`relative flex flex-col md:flex-row items-center gap-8 p-6 transition transform hover:scale-105 hover:shadow-xl ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
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
                className={`absolute top-1/2 -translate-y-1/2 p-6 rounded-lg w-[90%] md:w-[90%] backdrop-blur-lg 
                  ${index % 2 === 0
                    ? "left-0 md:left-[90%] bg-white/60 dark:bg-gray-800/60 border-l-4 border-b-4 border-blue-500"
                    : "right-0 md:right-[90%] bg-white/60 dark:bg-gray-800/60 border-r-4 border-b-4 border-orange-500"
                  }`}
              >
                <h3 className="text-2xl font-bold text-purple-600">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
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
