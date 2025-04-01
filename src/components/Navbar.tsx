import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-black border-2 border-gray-700 rounded-lg p-4 m-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-black dark:text-white">
                    Alejandra Meneses Carmona
                </Link>
                <div className="flex gap-4">
                    <Link href="/about" className="text-black dark:text-white">Sobre Mí</Link>
                    <Link href="/projects" className="text-black dark:text-white">Proyectos</Link>
                    <Link href="/contact" className="text-black dark:text-white">Contacto</Link>
                </div>
            </div>
        </nav>
    );
}