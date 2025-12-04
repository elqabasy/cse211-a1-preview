import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will respond shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] border-b border-[#ddd]">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <nav aria-label="Breadcrumb">
            <Link to="/" className="text-[#1a3a5c] no-underline hover:opacity-80">Home</Link>
            {' > '}
            <span>Contact Me</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-[900px] mx-auto px-6 py-12">
          <h2 className="mb-8">Contact Information</h2>

          {/* Contact Information Section */}
          <section className="mb-12">
            <address className="not-italic border border-[#ddd] p-6 bg-[#f9f9f9] mb-8">
              <h3 className="mb-4">Dr. Sarah Johnson</h3>
              <dl>
                <dt>Email</dt>
                <dd className="mb-4">
                  <a href="mailto:sarah.johnson@university.edu" className="text-[#1a3a5c] no-underline hover:opacity-80">
                    sarah.johnson@university.edu
                  </a>
                </dd>

                <dt>Office Address</dt>
                <dd className="mb-4">
                  Department of Computer Science<br />
                  Room CS-304, Science Building<br />
                  University Campus<br />
                  123 University Drive<br />
                  City, State 12345<br />
                  United States
                </dd>

                <dt>Phone</dt>
                <dd className="mb-4">
                  Office: (555) 123-4567<br />
                  Department: (555) 123-4500
                </dd>

                <dt>Website</dt>
                <dd className="mb-4">
                  <a
                    href="https://www.university.edu"
                    className="text-[#1a3a5c] no-underline hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University Website (Opens in new tab)
                  </a>
                </dd>
              </dl>
            </address>

            {/* Office Hours Table */}
            <div className="mb-8">
              <h3 className="mb-4">Office Hours</h3>
              <table className="w-full border-collapse border border-[#ddd]">
                <thead>
                  <tr className="bg-[#f5f5f5]">
                    <th className="border border-[#ddd] px-4 py-3 text-left">Day</th>
                    <th className="border border-[#ddd] px-4 py-3 text-left">Time</th>
                    <th className="border border-[#ddd] px-4 py-3 text-left">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#ddd] px-4 py-3">Monday</td>
                    <td className="border border-[#ddd] px-4 py-3">2:00 PM - 4:00 PM</td>
                    <td className="border border-[#ddd] px-4 py-3">Room CS-304</td>
                  </tr>
                  <tr className="bg-[#f9f9f9]">
                    <td className="border border-[#ddd] px-4 py-3">Wednesday</td>
                    <td className="border border-[#ddd] px-4 py-3">2:00 PM - 4:00 PM</td>
                    <td className="border border-[#ddd] px-4 py-3">Room CS-304</td>
                  </tr>
                  <tr>
                    <td className="border border-[#ddd] px-4 py-3">Thursday</td>
                    <td className="border border-[#ddd] px-4 py-3">10:00 AM - 12:00 PM</td>
                    <td className="border border-[#ddd] px-4 py-3">Room CS-304</td>
                  </tr>
                  <tr className="bg-[#f9f9f9]">
                    <td className="border border-[#ddd] px-4 py-3">Friday</td>
                    <td className="border border-[#ddd] px-4 py-3">By Appointment</td>
                    <td className="border border-[#ddd] px-4 py-3">Room CS-304</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Location Map */}
            <div className="mb-8">
              <h3 className="mb-4">Location Map</h3>
              <div className="border border-[#ddd] w-full h-[400px] bg-[#e0e0e0]">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.4194%2C37.7749%2C-122.4094%2C37.7849&layer=mapnik&marker=37.7799%2C-122.4144"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  title="University Location Map"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <h2 className="mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="mb-12">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-[#ccc] px-3 py-2 rounded resize-y"
                />
              </div>

              <button
                type="submit"
                className="bg-[#1a3a5c] text-white border-none px-6 py-3 rounded cursor-pointer hover:opacity-90"
              >
                Submit
              </button>
            </form>
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