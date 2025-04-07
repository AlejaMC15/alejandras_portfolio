// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-2">
                    &copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="https://github.com/AlejaMC15" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="hover:underline">
                            GitHub
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/alejandra-meneses-carmona-b651551a0/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="hover:underline">
                            LinkedIn
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
