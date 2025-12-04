import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-[#1a3a5c] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-6">
        <h1 className="mb-2">EduConnect</h1>
        <p className="mb-6">Your Gateway to Academic Excellence</p>
        <nav>
          <ul className="flex flex-wrap gap-4 list-none m-0 p-0">
            <li><Link to="/" className="text-white no-underline hover:opacity-80">Home</Link></li>
            <li><Link to="/about" className="text-white no-underline hover:opacity-80">About Us</Link></li>
            <li><Link to="/courses" className="text-white no-underline hover:opacity-80">Course Catalog</Link></li>
            <li><Link to="/course/1" className="text-white no-underline hover:opacity-80">Course Details</Link></li>
            <li><Link to="/dashboard" className="text-white no-underline hover:opacity-80">Student Dashboard</Link></li>
            <li><Link to="/registration" className="text-white no-underline hover:opacity-80">Registration</Link></li>
            <li><Link to="/contact" className="text-white no-underline hover:opacity-80">Contact Me</Link></li>
            <li><a href="https://www.university.edu" className="text-white no-underline hover:opacity-80" target="_blank" rel="noopener noreferrer">University Website</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
