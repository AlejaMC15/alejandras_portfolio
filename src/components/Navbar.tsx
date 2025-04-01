export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black border-2 border-gray-700 rounded-lg p-4 px-6 fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-black dark:text-white">
          Alejandra Meneses Carmona
        </a>
        <div className="flex gap-4">
          <a href="#about" className="text-black dark:text-white hover:text-blue-500 transition">About Me</a>
          <a href="#projects" className="text-black dark:text-white hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="text-black dark:text-white hover:text-blue-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}