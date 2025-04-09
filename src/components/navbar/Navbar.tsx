import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav
      className="px-6 py-4 fixed top-0 left-0 right-0 w-full z-50
                 bg-background 
                 shadow-[0_6px_12px_-2px_rgba(0,0,0,0.2)]
                 dark:shadow-[0_6px_12px_-2px_rgba(255,255,255,0.08)]"
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a
            className="text-transparent bg-clip-text
                       bg-gradient-to-r from-heading to-accent
                       font-bold text-xl transition
                       hover:from-accent hover:to-heading"
          >
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
