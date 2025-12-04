import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] border-b border-[#ddd]">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <nav aria-label="Breadcrumb">
            <Link to="/" className="text-[#1a3a5c] no-underline hover:opacity-80">Home</Link>
            {' > '}
            <span>About Us</span>
          </nav>
        </div>
      </div>      <main className="flex-1">
        <div className="max-w-[900px] mx-auto px-6 py-12">
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="mb-6">About CSE211 Web Programming</h2>

            <div className="mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=400&fit=crop"
                alt="Students learning web programming in a modern computer lab"
                className="w-full h-[300px] object-cover border border-[#ddd]"
              />
            </div>

            <p className="mb-4">
              CSE211 Web Programming is a comprehensive course designed to equip students with the essential
              skills and knowledge required to build modern, dynamic web applications. This course covers both
              front-end and back-end development technologies, providing students with a complete understanding
              of the web development ecosystem.
            </p>

            <p className="mb-4">
              Through hands-on projects and real-world applications, students will gain practical experience
              in creating responsive, user-friendly websites and web applications. The course emphasizes
              industry best practices, modern development workflows, and professional coding standards.
            </p>

            <blockquote className="border-l-4 border-[#1a3a5c] pl-6 py-4 my-8 bg-[#f9f9f9] italic">
              "Our mission is to empower students with the technical skills and creative thinking needed to
              build innovative web solutions that make a positive impact on the digital world. We believe in
              learning by doing, fostering collaboration, and preparing students for successful careers in
              web development."
            </blockquote>
          </section>

          {/* Course Objectives Section */}
          <section className="mb-12">
            <h2 className="mb-4">Course Objectives</h2>
            <ol className="ml-6 mb-6">
              <li className="mb-3">Understand the fundamental concepts of web architecture and HTTP protocol</li>
              <li className="mb-3">Master HTML5 semantic markup and modern CSS styling techniques</li>
              <li className="mb-3">Develop proficiency in JavaScript programming and DOM manipulation</li>
              <li className="mb-3">Learn to create responsive web designs that work across different devices</li>
              <li className="mb-3">Gain experience with server-side programming and database integration</li>
              <li className="mb-3">Apply web security best practices and accessibility standards</li>
              <li className="mb-3">Build and deploy complete web applications using modern development tools</li>
              <li className="mb-3">Develop problem-solving skills through real-world project work</li>
            </ol>
          </section>

          {/* Topics Covered Section */}
          <section className="mb-12">
            <h2 className="mb-4">Topics Covered</h2>
            <ul className="ml-6 mb-6">
              <li className="mb-2">HTML5 semantic elements and document structure</li>
              <li className="mb-2">CSS3 styling, layouts, flexbox, and grid systems</li>
              <li className="mb-2">JavaScript fundamentals and ES6+ features</li>
              <li className="mb-2">DOM manipulation and event handling</li>
              <li className="mb-2">Responsive web design and mobile-first approach</li>
              <li className="mb-2">Web forms, validation, and user input handling</li>
              <li className="mb-2">Introduction to server-side programming with Node.js</li>
              <li className="mb-2">Database concepts and SQL basics</li>
              <li className="mb-2">RESTful API design and implementation</li>
              <li className="mb-2">Version control with Git and GitHub</li>
              <li className="mb-2">Web security principles and HTTPS</li>
              <li className="mb-2">Performance optimization techniques</li>
              <li className="mb-2">Web accessibility (WCAG guidelines)</li>
              <li className="mb-2">Deployment and hosting of web applications</li>
            </ul>
          </section>

          {/* Instructor Information Section */}
          <section className="mb-12">
            <h2 className="mb-4">Instructor Information</h2>
            <div className="border border-[#ddd] p-6 bg-[#f9f9f9]">
              <dl>
                <dt>Name</dt>
                <dd className="mb-4">Dr. Sarah Johnson</dd>

                <dt>Title</dt>
                <dd className="mb-4">Associate Professor of Computer Science</dd>

                <dt>Education</dt>
                <dd className="mb-4">Ph.D. in Computer Science, Stanford University</dd>

                <dt>Specialization</dt>
                <dd className="mb-4">Web Technologies, Human-Computer Interaction, Software Engineering</dd>

                <dt>Experience</dt>
                <dd className="mb-4">12 years of teaching experience, 8 years in industry as a senior web developer</dd>

                <dt>Email</dt>
                <dd className="mb-4">
                  <a href="mailto:sarah.johnson@university.edu" className="text-[#1a3a5c] no-underline hover:opacity-80">
                    sarah.johnson@university.edu
                  </a>
                </dd>

                <dt>Office Hours</dt>
                <dd className="mb-4">Monday and Wednesday, 2:00 PM - 4:00 PM, Room CS-304</dd>

                <dt>Research Interests</dt>
                <dd>Progressive web applications, web performance optimization, accessible web design</dd>
              </dl>
            </div>
          </section>

          {/* Course Benefits Section */}
          <section className="mb-12">
            <h2 className="mb-4">Course Benefits</h2>
            <div className="mb-6">
              <h3 className="mb-3">Career Opportunities</h3>
              <p className="mb-4">
                Completing this course will prepare you for various roles in the tech industry, including
                front-end developer, back-end developer, full-stack developer, and web designer. The skills
                you learn are in high demand across all industries.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-3">Practical Skills</h3>
              <p className="mb-4">
                You will gain hands-on experience through multiple projects, learning to build real-world
                applications from scratch. By the end of the course, you will have a portfolio of web
                projects to showcase to potential employers.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-3">Industry-Relevant Knowledge</h3>
              <p className="mb-4">
                The course curriculum is regularly updated to reflect current industry trends and best
                practices. You will learn the same tools and technologies used by professional developers
                at leading tech companies.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-3">Collaborative Learning</h3>
              <p className="mb-4">
                Through group projects and peer code reviews, you will develop teamwork and communication
                skills essential for working in professional development teams. You will also build a
                network of fellow developers and learn from each other's experiences.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-3">Foundation for Advanced Studies</h3>
              <p className="mb-4">
                This course provides a solid foundation for more advanced topics such as mobile app
                development, cloud computing, and software architecture. It serves as a stepping stone
                for students interested in pursuing graduate studies or specialized certifications.
              </p>
            </div>
          </section>
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