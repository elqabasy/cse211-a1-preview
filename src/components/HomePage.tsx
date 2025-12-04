import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const courses = [
    {
      id: 1,
      title: 'Introduction to Computer Science',
      description: 'Learn the fundamentals of programming and computational thinking.',
      instructor: 'Dr. Jane Smith',
      duration: '12 weeks',
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      description: 'Master essential data structures and algorithmic problem solving.',
      instructor: 'Prof. John Davis',
      duration: '10 weeks',
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      description: 'Build modern web applications with HTML, CSS, and JavaScript.',
      instructor: 'Dr. Emily Chen',
      duration: '8 weeks',
    },
    {
      id: 4,
      title: 'Database Management Systems',
      description: 'Understand database design, SQL, and data management principles.',
      instructor: 'Prof. Michael Brown',
      duration: '10 weeks',
    },
  ];

  const announcements = [
    { id: 1, title: 'Spring Semester Registration Open', date: '2025-01-15' },
    { id: 2, title: 'New Course: Machine Learning Basics', date: '2025-01-10' },
    { id: 3, title: 'Academic Calendar Updated', date: '2025-01-05' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] border-b border-[#ddd]">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <nav aria-label="Breadcrumb">
            <span>Home</span>
          </nav>
        </div>
      </div>      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-8">
          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - 70% */}
            <div className="w-full md:w-[70%]">
              {/* Welcome Section */}
              <section className="mb-8">
                <header className="mb-4">
                  <h2 className="mb-2">Welcome to EduConnect</h2>
                  <p>Explore our comprehensive academic programs and start your learning journey today. Access quality education from anywhere, anytime.</p>
                </header>
              </section>

              {/* Featured Courses Section */}
              <section className="mb-8">
                <h2 className="mb-4">Featured Courses</h2>

                {courses.map((course, index) => (
                  <article key={course.id} className="border border-[#ddd] p-4 mb-4 bg-white">
                    {index === 0 ? (
                      <figure className="mb-4">
                        <div className="w-full h-[200px] bg-[#e0e0e0] mb-2">
                          <ImageWithFallback
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <figcaption className="text-[#666]">Students collaborating on programming projects</figcaption>
                      </figure>
                    ) : (
                      <div className="w-full h-[150px] bg-[#e0e0e0] mb-3">
                        <ImageWithFallback
                          src={`https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=300&fit=crop&sig=${course.id}`}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <h3 className="mb-2">{course.title}</h3>
                    <p className="mb-2">{course.description}</p>
                    <p className="mb-2">Instructor: {course.instructor}</p>
                    <p className="mb-3">Duration: {course.duration}</p>
                    <Link to={`/course/${course.id}`}>
                      <button className="bg-[#1a3a5c] text-white border-none px-4 py-2 rounded cursor-pointer hover:opacity-90">
                        View Details
                      </button>
                    </Link>
                  </article>
                ))}
              </section>

              {/* Latest Announcements */}
              <section className="mb-8">
                <h2 className="mb-4">Latest Announcements</h2>
                {announcements.map((announcement) => (
                  <article key={announcement.id} className="border-b border-[#ddd] pb-3 mb-3">
                    <h3 className="mb-1">{announcement.title}</h3>
                    <p>Date: {announcement.date}</p>
                  </article>
                ))}
              </section>

              {/* Statistics Section */}
              <section className="mb-8">
                <h2 className="mb-4">Platform Statistics</h2>
                <dl className="border border-[#ddd] p-4 bg-[#f9f9f9]">
                  <dt>Total Students Enrolled</dt>
                  <dd className="mb-3">5,240</dd>

                  <dt>Active Courses</dt>
                  <dd className="mb-3">127</dd>

                  <dt>Expert Instructors</dt>
                  <dd className="mb-3">45</dd>

                  <dt>Course Completion Rate</dt>
                  <dd>87%</dd>
                </dl>
              </section>
            </div>

            {/* Right Column - 30% */}
            <div className="w-full md:w-[30%]">
              {/* Search Form */}
              <div className="mb-6 border border-[#ddd] p-4 bg-white">
                <h3 className="mb-3">Search Courses</h3>
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Enter course name..."
                    className="w-full border border-[#ccc] px-3 py-2 rounded mb-2"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#1a3a5c] text-white border-none px-4 py-2 rounded cursor-pointer hover:opacity-90"
                  >
                    Submit
                  </button>
                </form>
              </div>

              {/* Quick Navigation Links */}
              <div className="mb-6 border border-[#ddd] p-4 bg-white">
                <h3 className="mb-3">Quick Links</h3>
                <nav>
                  <ul className="list-none m-0 p-0 flex flex-col gap-2">
                    <li><Link to="/courses" className="text-[#1a3a5c] no-underline hover:opacity-80">Browse All Courses</Link></li>
                    <li><Link to="/registration" className="text-[#1a3a5c] no-underline hover:opacity-80">Enroll Now</Link></li>
                    <li><Link to="/dashboard" className="text-[#1a3a5c] no-underline hover:opacity-80">My Dashboard</Link></li>
                    <li><Link to="/about" className="text-[#1a3a5c] no-underline hover:opacity-80">About Platform</Link></li>
                    <li><Link to="/contact" className="text-[#1a3a5c] no-underline hover:opacity-80">Contact Support</Link></li>
                  </ul>
                </nav>
              </div>

              {/* Marquee - Latest News */}
              <div className="mb-6 border border-[#ddd] p-4 bg-[#f9f9f9]">
                <h3 className="mb-3">Latest News</h3>
                <div className="overflow-hidden">
                  <div className="animate-marquee whitespace-nowrap">
                    <span>New AI and Machine Learning course launching next month! | Registration deadline extended to January 31st | Winter break: December 20 - January 5</span>
                  </div>
                </div>
              </div>

              {/* Advertisement */}
              <aside className="border border-[#ddd] p-4 bg-white">
                <h3 className="mb-3">Special Offer</h3>
                <div className="w-full h-[200px] bg-[#e8f4f8] flex items-center justify-center mb-3">
                  <p className="text-center px-4">Get 20% off on all premium courses this month!</p>
                </div>
                <Link to="/registration">
                  <button className="w-full bg-[#1a3a5c] text-white border-none px-4 py-2 rounded cursor-pointer hover:opacity-90">
                    Enroll Now
                  </button>
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f5f5f5] border-t border-[#ddd] mt-12">
        <div className="max-w-[1100px] mx-auto px-6 py-6">
          <div className="mb-4">
            <p className="mb-2">
              <a href="mailto:info@educonnect.edu" className="text-[#1a3a5c] no-underline hover:opacity-80">
                info@educonnect.edu
              </a>
            </p>
            <div className="flex gap-4 mb-4">
              <a href="https://linkedin.com" className="text-[#1a3a5c] no-underline hover:opacity-80" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://facebook.com" className="text-[#1a3a5c] no-underline hover:opacity-80" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" className="text-[#1a3a5c] no-underline hover:opacity-80" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <p className="mb-2">&copy; 2025 EduConnect. All rights reserved.</p>
          <p className="mb-2">
            <Link to="/about" className="text-[#1a3a5c] no-underline hover:opacity-80">About Us</Link>
          </p>
          <p>Last updated: December 4, 2025</p>
        </div>
      </footer>
    </div>
  );
}