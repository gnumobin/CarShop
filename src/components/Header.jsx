import Logo from "/logo.png";
import useMenuStore from "../store/useMenuStore";
import { Link, useLocation } from "react-router"; // For detecting active route

function Header() {
  // Zustand state for mobile menu
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuStore();

  // Get the current route using React Router's `useLocation`
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="container p-[2rem] relative">
      {/* Container for Logo and Hamburger Menu */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
            <img src={Logo} alt="website logo" className="w-full"/>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-800 transition duration-300"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links for Larger Screens */}
        <div className="hidden md:flex space-x-[3.1rem] items-center text-3xl font-medium">
          <NavLink href="/" isActive={isActive("/")} onClick={closeMenu}>
            Sobre
          </NavLink>
          <NavLink href="/car" isActive={isActive("/car")} onClick={closeMenu}>
            Contate
          </NavLink>
          <NavLink href="/anunciar" isActive={isActive("/anunciar")} onClick={closeMenu}>
            Anunciar
          </NavLink>
          <NavLink href="/estoque" isActive={isActive("/estoque")} onClick={closeMenu}>
            Estoque
          </NavLink>
        </div>
      </div>

      {/* Side Panel (Mobile Menu) */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-50 h-screen overflow-y-auto bg-white shadow-md transition-transform duration-300 ease-in-out transform w-64`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition duration-300"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="mt-16 px-4 space-y-4 text-2xl">
          <NavLink href="/sobre" isActive={isActive("/sobre")} onClick={closeMenu}>
            Sobre
          </NavLink>
          <NavLink href="/contate" isActive={isActive("/contate")} onClick={closeMenu}>
            Contate
          </NavLink>
          <NavLink href="/anunciar" isActive={isActive("/anunciar")} onClick={closeMenu}>
            Anunciar
          </NavLink>
          <NavLink href="/estoque" isActive={isActive("/estoque")} onClick={closeMenu}>
            Estoque
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

// Helper Component for Navigation Links
const NavLink = ({ href, children, isActive, onClick }) => {
  return (
    <Link
      to={href}
      className={`block px-[2rem] py-[1rem] rounded-full ${
        isActive
          ? "text-white bg-black rounded"
          : "text-primary hover:text-gray-800"
      } transition duration-300`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
