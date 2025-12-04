import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a3a5c] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="no-underline text-white">
            <span>Student Portal</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            <li><Link to="/" className="text-white no-underline hover:opacity-80">Home</Link></li>
            <li><Link to="/courses" className="text-white no-underline hover:opacity-80">Courses</Link></li>
            <li><Link to="/about" className="text-white no-underline hover:opacity-80">About</Link></li>
            <li><Link to="/registration" className="text-white no-underline hover:opacity-80">Registration</Link></li>
            <li><Link to="/contact" className="text-white no-underline hover:opacity-80">Contact</Link></li>
            <li><Link to="/dashboard" className="text-white no-underline hover:opacity-80">Dashboard</Link></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden bg-transparent border-2 border-white text-white px-3 py-1 rounded cursor-pointer"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <ul className="md:hidden flex flex-col gap-3 mt-4 list-none m-0 p-0">
            <li><Link to="/" className="text-white no-underline block py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/courses" className="text-white no-underline block py-2" onClick={() => setMobileMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/about" className="text-white no-underline block py-2" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/registration" className="text-white no-underline block py-2" onClick={() => setMobileMenuOpen(false)}>Registration</Link></li>
            <li><Link to="/contact" className="text-white no-underline block py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/dashboard" className="text-white no-underline block py-2" onClick={() => setMobileMenuOpen(false)}>Dashboard</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
