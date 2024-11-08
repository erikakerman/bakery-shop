import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-200 w-full">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link
          to="/"
          className="text-2xl font-semibold"
          style={{ color: "#E4126B" }}
        >
          Sweet Delights
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-600 hover:text-[#E4126B]">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-[#E4126B]">
            About
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-[#E4126B]">
            Products
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-[#E4126B]">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-50 md:hidden transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-4 space-y-4 text-center pt-20">
            <Link
              to="/"
              className="text-gray-600 hover:text-[#E4126B] text-xl py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-[#E4126B] text-xl py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-[#E4126B] text-xl py-2"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-[#E4126B] text-xl py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
