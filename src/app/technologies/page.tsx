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
    SiSass
} from "react-icons/si";

const techs = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
    { name: "SCSS", icon: <SiSass className="text-pink-400" /> }, // ← Nuevo ítem
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
    { name: "Material UI", icon: <SiMaterialdesign className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-700" /> },
];

export default function Technologies() {
    return (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
            {techs.map(({ name, icon }) => (
                <div
                    key={name}
                    className="flex flex-col items-center justify-center gap-2 group transition-transform transform hover:scale-110"
                >
                    <div className="relative p-4 rounded-full bg-[#0a0a0a] border-2 border-transparent 
  shadow-lg transition-all duration-300
  before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r 
  before:from-blue-500 before:to-purple-500 before:-z-10
  after:absolute after:inset-0 after:rounded-full after:border-2 after:border-transparent 
  after:shadow-[0px_0px_12px_2px_rgba(0,191,255,0.6),0px_0px_24px_4px_rgba(138,43,226,0.4)] after:-z-20
  flex items-center justify-center">
                        <span className="text-5xl relative z-10">{icon}</span>
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-[var(--primary-color)] transition-colors">
                        {name}
                    </span>
                </div>
            ))}
        </div>
    );
}
