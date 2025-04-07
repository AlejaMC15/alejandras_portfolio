import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="px-6 py-4 fixed top-0 left-0 right-0 w-full z-50 bg-[#09101a] shadow-[0_0_20px_rgba(0,191,255,0.4),0_0_30px_rgba(138,43,226,0.3)]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-bold text-xl hover:from-cyan-400 hover:to-pink-500 transition">
            Alejandra Meneses Carmona
          </a>
        </Link>
        <div className="flex gap-4">
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#technologies">Technologies</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
