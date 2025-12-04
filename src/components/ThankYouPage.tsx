import { Link, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function ThankYouPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Generate reference number
  const referenceNumber = `REF-${Date.now().toString().slice(-8)}`;
  const submissionDate = new Date();
  const submissionDateISO = submissionDate.toISOString();

  // Extract query parameters for display
  const submittedData = {
    fullName: queryParams.get('fullName') || 'Guest User',
    email: queryParams.get('email') || 'Not provided',
    studentId: queryParams.get('studentId') || 'Not provided',
    major: queryParams.get('major') || 'Not provided',
    degreeLevel: queryParams.get('degreeLevel') || 'Not provided',
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
            <Link to="/registration" className="text-[#1a3a5c] no-underline hover:opacity-80">Registration</Link>
            {' > '}
            <span>Thank You</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-[900px] mx-auto px-6 py-12">

          {/* Success Icon and Main Heading */}
          <section className="mb-12 text-center">
            <div className="w-24 h-24 rounded-full bg-[#4caf50] mx-auto mb-6 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>

            <h1 className="mb-4 text-[#1a3a5c]">Thank You for Registration!</h1>
            <p className="text-lg text-[#666] mb-4">
              We appreciate your interest in EduConnect and the Fall 2025-2026 semester.
            </p>
          </section>

          {/* Confirmation Message Section */}
          <section className="mb-12 border border-[#ddd] bg-[#f9f9f9] p-6 rounded">
            <h2 className="mb-4 text-[#1a3a5c]">Registration Confirmed</h2>
            <p className="mb-4 text-[#333]">
              We have received your registration. You will receive a confirmation email shortly at the email address
              you provided during registration.
            </p>
            <p className="text-[#666]">
              <strong>Reference Number:</strong> <code className="bg-white border border-[#ddd] px-2 py-1 rounded">{referenceNumber}</code>
            </p>
            <p className="text-[#666] mt-2">
              <strong>Submission Time:</strong>{' '}
              <time dateTime={submissionDateISO}>
                {submissionDate.toLocaleString()}
              </time>
            </p>
          </section>

          {/* Submission Summary Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-[#1a3a5c]">Submission Summary</h2>
            <div className="border border-[#ddd] bg-white p-6 rounded">
              <dl className="space-y-4">
                <div className="flex border-b border-[#eee] pb-4">
                  <dt className="font-medium text-[#1a3a5c] w-40">Full Name:</dt>
                  <dd className="text-[#333] flex-1">{submittedData.fullName}</dd>
                </div>
                <div className="flex border-b border-[#eee] pb-4">
                  <dt className="font-medium text-[#1a3a5c] w-40">Email Address:</dt>
                  <dd className="text-[#333] flex-1">{submittedData.email}</dd>
                </div>
                <div className="flex border-b border-[#eee] pb-4">
                  <dt className="font-medium text-[#1a3a5c] w-40">Student ID:</dt>
                  <dd className="text-[#333] flex-1">{submittedData.studentId}</dd>
                </div>
                <div className="flex border-b border-[#eee] pb-4">
                  <dt className="font-medium text-[#1a3a5c] w-40">Degree Level:</dt>
                  <dd className="text-[#333] flex-1">{submittedData.degreeLevel}</dd>
                </div>
                <div className="flex">
                  <dt className="font-medium text-[#1a3a5c] w-40">Major/Department:</dt>
                  <dd className="text-[#333] flex-1">{submittedData.major}</dd>
                </div>
              </dl>
            </div>
            <p className="text-sm text-[#999] mt-4">
              Note: To view or update your complete registration details, please log in to your student dashboard.
            </p>
          </section>

          {/* Next Steps Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-[#1a3a5c]">What Happens Next?</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-[#1a3a5c] pl-4 py-2">
                <h3 className="font-medium text-[#1a3a5c] mb-2">Step 1: Confirmation Email</h3>
                <p className="text-[#666]">
                  Check your email inbox (and spam folder) for a confirmation message from EduConnect.
                  This email will contain important account information and next steps.
                </p>
              </div>
              <div className="border-l-4 border-[#1a3a5c] pl-4 py-2">
                <h3 className="font-medium text-[#1a3a5c] mb-2">Step 2: Account Activation</h3>
                <p className="text-[#666]">
                  Your account will be activated within 24 hours. Once activated, you'll be able to access
                  your student dashboard and enroll in your selected courses.
                </p>
              </div>
              <div className="border-l-4 border-[#1a3a5c] pl-4 py-2">
                <h3 className="font-medium text-[#1a3a5c] mb-2">Step 3: Course Enrollment</h3>
                <p className="text-[#666]">
                  Log in to your dashboard and complete your course enrollment. Make sure to select your
                  preferred learning mode and schedule before the registration deadline.
                </p>
              </div>
              <div className="border-l-4 border-[#1a3a5c] pl-4 py-2">
                <h3 className="font-medium text-[#1a3a5c] mb-2">Step 4: Start Learning</h3>
                <p className="text-[#666]">
                  Once the semester begins, access your courses from the dashboard and start your learning journey
                  with EduConnect!
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-[#1a3a5c]">Registration Timeline</h2>
            <div className="border border-[#ddd] rounded bg-[#f9f9f9]">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-[#ddd]">
                    <td className="px-6 py-4 font-medium text-[#1a3a5c] w-40">Today</td>
                    <td className="px-6 py-4 text-[#333]">Registration form submitted</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="px-6 py-4 font-medium text-[#1a3a5c]">Within 24 Hours</td>
                    <td className="px-6 py-4 text-[#333]">Account activation and confirmation email sent</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="px-6 py-4 font-medium text-[#1a3a5c]">December 10, 2025</td>
                    <td className="px-6 py-4 text-[#333]">Course enrollment opens in your dashboard</td>
                  </tr>
                  <tr className="border-b border-[#ddd]">
                    <td className="px-6 py-4 font-medium text-[#1a3a5c]">December 31, 2025</td>
                    <td className="px-6 py-4 text-[#333]">Registration deadline - final day to enroll</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-[#1a3a5c]">January 6, 2026</td>
                    <td className="px-6 py-4 text-[#333]">Fall 2025-2026 semester begins</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact Information Section */}
          <section className="mb-12">
            <h2 className="mb-6 text-[#1a3a5c]">Have Questions?</h2>
            <address className="not-italic border border-[#ddd] bg-[#f9f9f9] p-6 rounded">
              <p className="font-medium text-[#1a3a5c] mb-4">Contact the Admissions Office:</p>
              <dl className="space-y-3 text-[#333]">
                <div>
                  <dt className="font-medium text-[#666]">Email:</dt>
                  <dd>
                    <a href="mailto:admissions@educonnect.edu" className="text-[#1a3a5c] no-underline hover:opacity-80">
                      admissions@educonnect.edu
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-[#666]">Phone:</dt>
                  <dd>
                    <a href="tel:+15551234567" className="text-[#1a3a5c] no-underline hover:opacity-80">
                      +1 (555) 123-4567
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-[#666]">Office Hours:</dt>
                  <dd>Monday - Friday, 9:00 AM - 5:00 PM (EST)</dd>
                </div>
                <div>
                  <dt className="font-medium text-[#666]">Address:</dt>
                  <dd>
                    EduConnect University<br />
                    Admissions Office<br />
                    123 University Drive<br />
                    City, State 12345
                  </dd>
                </div>
              </dl>
            </address>
          </section>

          {/* Call to Action Section */}
          <section className="text-center">
            <h2 className="mb-6 text-[#1a3a5c]">Ready to Get Started?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/dashboard">
                <button className="bg-[#1a3a5c] text-white border-none px-8 py-3 rounded cursor-pointer hover:opacity-90 font-medium">
                  Go to Student Dashboard
                </button>
              </Link>
              <Link to="/">
                <button className="bg-white text-[#1a3a5c] border-2 border-[#1a3a5c] px-8 py-3 rounded cursor-pointer hover:bg-[#f9f9f9] font-medium">
                  Return to Homepage
                </button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
