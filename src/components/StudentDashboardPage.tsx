import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StudentDashboardPage() {
  const studentName = 'John Doe';
  const studentEmail = 'john.doe@student.edu';
  const studentID = '12345';

  const enrolledCourses = [
    {
      id: 1,
      title: 'Introduction to Computer Science',
      instructor: 'Dr. Jane Smith',
      progress: 75,
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop',
      lastAccessed: '2025-12-03',
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      instructor: 'Prof. Michael Johnson',
      progress: 45,
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
      lastAccessed: '2025-12-02',
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      instructor: 'Sarah Williams',
      progress: 90,
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop',
      lastAccessed: '2025-12-04',
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      name: 'Assignment 5: Loops and Functions',
      course: 'Introduction to Computer Science',
      dueDate: '2025-12-10',
      priority: 'High',
    },
    {
      id: 2,
      name: 'Quiz: Data Structures',
      course: 'Data Structures and Algorithms',
      dueDate: '2025-12-12',
      priority: 'Medium',
    },
    {
      id: 3,
      name: 'Final Project: Website Portfolio',
      course: 'Web Development Fundamentals',
      dueDate: '2025-12-08',
      priority: 'High',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'Course started',
      description: 'Started "Introduction to Computer Science" course',
      timestamp: '2025-12-03T10:30:00',
    },
    {
      id: 2,
      type: 'Assignment submitted',
      description: 'Submitted Assignment 4: Variables and Data Types',
      timestamp: '2025-12-02T14:45:00',
    },
    {
      id: 3,
      type: 'Quiz completed',
      description: 'Completed Quiz on Functions with score 92%',
      timestamp: '2025-12-01T16:20:00',
    },
    {
      id: 4,
      type: 'Certificate earned',
      description: 'Earned Certificate: Web Development Fundamentals',
      timestamp: '2025-11-28T09:00:00',
    },
    {
      id: 5,
      type: 'Course milestone',
      description: 'Completed 50% of Data Structures course',
      timestamp: '2025-11-25T11:15:00',
    },
  ];

  const recommendedCourses = [
    { id: 4, title: 'Advanced JavaScript' },
    { id: 5, title: 'Database Design' },
    { id: 6, title: 'Cloud Computing Basics' },
  ];

  const quickLinks = [
    { label: 'Browse All Courses', href: '/courses' },
    { label: 'View Certificate', href: '#' },
    { label: 'Learning Resources', href: '#' },
    { label: 'Help & Support', href: '#' },
  ];

  const getActivityIcon = (type: string): string => {
    switch (type) {
      case 'Course started':
        return '▶';
      case 'Assignment submitted':
        return '📝';
      case 'Quiz completed':
        return '✓';
      case 'Certificate earned':
        return '🏆';
      default:
        return '•';
    }
  };

  const formatTime = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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
            <span>Dashboard</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-12">

          {/* PERSONAL HEADER AREA */}
          <header className="border-b border-[#ddd] pb-8 mb-12">
            <div className="flex gap-8 items-start">
              <figure className="w-24 h-24 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-[#ddd] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                    alt={studentName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-center text-sm text-[#666] mt-2">Profile</figcaption>
              </figure>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-[#1a3a5c] mb-2">Welcome back, {studentName}!</h1>
                <p className="text-lg text-[#666] mb-6">Here's your learning progress and upcoming activities.</p>

                {/* Quick Stats */}
                <dl className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="border-l-4 border-[#1a3a5c] pl-4">
                    <dt className="text-sm text-[#666] font-medium">Total Courses</dt>
                    <dd className="text-2xl font-bold text-[#1a3a5c]">3</dd>
                  </div>
                  <div className="border-l-4 border-[#1a3a5c] pl-4">
                    <dt className="text-sm text-[#666] font-medium">Completed</dt>
                    <dd className="text-2xl font-bold text-[#1a3a5c]">1</dd>
                  </div>
                  <div className="border-l-4 border-[#1a3a5c] pl-4">
                    <dt className="text-sm text-[#666] font-medium">In Progress</dt>
                    <dd className="text-2xl font-bold text-[#1a3a5c]">2</dd>
                  </div>
                  <div className="border-l-4 border-[#1a3a5c] pl-4">
                    <dt className="text-sm text-[#666] font-medium">Certificates</dt>
                    <dd className="text-2xl font-bold text-[#1a3a5c]">1</dd>
                  </div>
                </dl>
              </div>
            </div>
          </header>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

            {/* Left Column (2 columns on large screens) */}
            <div className="lg:col-span-2">

              {/* ENROLLED COURSES SECTION */}
              <section id="enrolled-courses" className="mb-12 pb-12 border-b border-[#ddd]">
                <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Enrolled Courses</h2>

                <div className="space-y-6">
                  {enrolledCourses.map((course) => (
                    <article key={course.id} className="border border-[#ddd] rounded overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row gap-4 p-6">
                        {/* Course Thumbnail */}
                        <div className="w-full md:w-[150px] flex-shrink-0 h-[100px]">
                          <ImageWithFallback
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>

                        {/* Course Info */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#1a3a5c] mb-1">{course.title}</h3>
                          <p className="text-sm text-[#666] mb-3">Instructor: {course.instructor}</p>

                          {/* Progress */}
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-[#666]">Progress</span>
                              <span className="font-medium text-[#1a3a5c]">{course.progress}%</span>
                            </div>
                            <div className="w-full h-2 bg-[#e0e0e0] rounded overflow-hidden">
                              <div
                                className="h-full bg-[#1a3a5c]"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          </div>

                          {/* Last Accessed */}
                          <div className="text-xs text-[#999] mb-4">
                            Last accessed: <time dateTime={course.lastAccessed}>
                              {new Date(course.lastAccessed).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </time>
                          </div>

                          <Link to={`/course/${course.id}`} className="no-underline">
                            <button className="bg-[#1a3a5c] text-white border-none px-4 py-2 rounded cursor-pointer hover:opacity-90">
                              Continue Learning
                            </button>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              {/* PROGRESS STATISTICS SECTION */}
              <section id="progress-statistics" className="mb-12 pb-12 border-b border-[#ddd]">
                <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Progress Statistics</h2>

                <div className="bg-[#f9f9f9] border border-[#ddd] rounded p-8">
                  <dl className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    <div>
                      <dt className="text-sm font-medium text-[#666] mb-2">Courses Completed</dt>
                      <dd className="text-3xl font-bold text-[#1a3a5c]">1</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-[#666] mb-2">Courses In Progress</dt>
                      <dd className="text-3xl font-bold text-[#1a3a5c]">2</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-[#666] mb-2">Total Learning Hours</dt>
                      <dd className="text-3xl font-bold text-[#1a3a5c]">124</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-[#666] mb-2">Certificates Earned</dt>
                      <dd className="text-3xl font-bold text-[#1a3a5c]">1</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-[#666] mb-2">Average Quiz Score</dt>
                      <dd className="text-3xl font-bold text-[#1a3a5c]">89%</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-[#666] mb-2">Current Streak</dt>
                      <dd className="text-3xl font-bold text-[#1a3a5c]">12 days</dd>
                    </div>
                  </dl>
                </div>
              </section>

              {/* UPCOMING DEADLINES SECTION */}
              <section id="upcoming-deadlines" className="mb-12 pb-12 border-b border-[#ddd]">
                <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Upcoming Deadlines</h2>

                <ol className="list-none m-0 p-0 space-y-4">
                  {upcomingDeadlines.map((deadline, idx) => (
                    <li key={deadline.id} className="border-l-4 border-[#1a3a5c] pl-4 py-3">
                      <div className="flex justify-between items-start gap-4 mb-1">
                        <h4 className="font-medium text-[#333]">{idx + 1}. {deadline.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded font-medium ${deadline.priority === 'High' ? 'bg-[#ffcccc] text-[#cc0000]' : 'bg-[#fff3cd] text-[#856404]'
                          }`}>
                          {deadline.priority}
                        </span>
                      </div>
                      <p className="text-sm text-[#666] mb-2">{deadline.course}</p>
                      <time dateTime={deadline.dueDate} className="text-xs text-[#999]">
                        Due: {new Date(deadline.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                    </li>
                  ))}
                </ol>
              </section>

              {/* RECENT ACTIVITY SECTION */}
              <section id="recent-activity">
                <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Recent Activity</h2>

                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <article key={activity.id} className="border border-[#ddd] rounded p-4 bg-white hover:bg-[#f9f9f9] transition-colors">
                      <div className="flex gap-4 items-start">
                        <div className="text-2xl flex-shrink-0 pt-1">{getActivityIcon(activity.type)}</div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-[#1a3a5c] text-sm">{activity.type}</h4>
                            <time dateTime={activity.timestamp} className="text-xs text-[#999]">
                              {formatTime(activity.timestamp)}
                            </time>
                          </div>
                          <p className="text-sm text-[#666]">{activity.description}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Sidebar */}
            <aside className="lg:col-span-1">

              {/* RECOMMENDED COURSES */}
              <div className="border border-[#ddd] rounded p-6 mb-6 bg-[#f9f9f9] sticky top-[100px]">
                <h3 className="text-lg font-bold text-[#1a3a5c] mb-4">Recommended Courses</h3>
                <ul className="list-none m-0 p-0 space-y-3">
                  {recommendedCourses.map((course) => (
                    <li key={course.id}>
                      <Link
                        to={`/course/${course.id}`}
                        className="text-[#1a3a5c] no-underline hover:opacity-80 text-sm block p-3 bg-white rounded hover:bg-[#e8f0f8] transition-colors"
                      >
                        → {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/courses" className="text-[#1a3a5c] no-underline hover:opacity-80 text-sm mt-4 block font-medium">
                  View All Courses →
                </Link>
              </div>

              {/* CALENDAR PLACEHOLDER */}
              <div className="border border-[#ddd] rounded p-6 mb-6 bg-[#f9f9f9]">
                <h3 className="text-lg font-bold text-[#1a3a5c] mb-4">Calendar</h3>
                <div className="bg-white border border-[#ddd] rounded p-4 h-[300px] flex items-center justify-center text-center">
                  <div>
                    <div className="text-4xl mb-2">📅</div>
                    <p className="text-sm text-[#666]">Calendar view coming soon</p>
                    <p className="text-xs text-[#999]">Track your deadlines and events</p>
                  </div>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="border border-[#ddd] rounded p-6 bg-[#f9f9f9]">
                <h3 className="text-lg font-bold text-[#1a3a5c] mb-4">Quick Links</h3>
                <nav>
                  <ul className="list-none m-0 p-0 space-y-2">
                    {quickLinks.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          to={link.href}
                          className="text-[#1a3a5c] no-underline hover:opacity-80 text-sm block p-2 bg-white rounded hover:bg-[#e8f0f8] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

            </aside>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
