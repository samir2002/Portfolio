export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-gray-800">
        <a href="#hero" className="text-2xl font-bold text-indigo-600">
          Samir.dev
        </a>
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
