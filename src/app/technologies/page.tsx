// src/app/technologies/page.tsx
import {
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiMaterialdesign,
    SiTailwindcss,
    SiJavascript,
    SiTypescript,
    SiNextdotjs,
    SiNodedotjs,
    SiGit,
    SiGithub,
    SiFigma,
    SiAdobexd,
    SiSass,
} from "react-icons/si";

const techs = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "SCSS", icon: <SiSass className="text-pink-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
    { name: "Material UI", icon: <SiMaterialdesign className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-foreground" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-foreground" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-700" /> },
];

export default function Technologies() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 place-items-center">
                {techs.map(({ name, icon }) => (
                    <div
                        key={name}
                        className="flex flex-col items-center justify-center gap-2 group transition-transform transform hover:scale-110"
                    >
                        <div
                            className="relative p-4 rounded-full bg-background border-2 border-transparent 
                shadow-md transition-all duration-300
                before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r 
                before:from-heading before:to-accent before:-z-10
                after:absolute after:inset-0 after:rounded-full after:border-2 after:border-transparent 
                after:shadow-[0_0_6px_1px_var(--accent-color),_0_0_10px_2px_var(--heading-color)] after:-z-20
                flex items-center justify-center"
                        >
                            <span className="text-4xl md:text-5xl relative z-10">{icon}</span>
                        </div>
                        <span className="text-sm md:text-base text-subtext group-hover:text-accent transition-colors text-center">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
