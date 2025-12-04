import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CourseDetailPage() {
  const { id } = useParams();
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const course = {
    id: id,
    title: 'Introduction to Computer Science',
    subtitle: 'Master the fundamentals of programming and computational thinking',
    description: 'This comprehensive course introduces students to the fundamental concepts of computer science and programming. Students will learn problem-solving strategies, algorithm development, and programming basics using industry-standard practices. Through hands-on projects and interactive exercises, you will build a strong foundation in computer science.',
    level: 'Beginner',
    duration: '12 weeks',
    timeCommitment: '8-10 hours per week',
    price: '$299',
    language: 'English',
    certificate: 'Yes',
    enrollment: 1250,
    rating: 4.5,
    instructor: {
      name: 'Dr. Jane Smith',
      bio: 'Dr. Jane Smith has over 15 years of experience teaching computer science and has published numerous papers in the field of computational theory. She has worked with top tech companies and is passionate about making computer science accessible to everyone.',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    },
  };

  const learningOutcomes = [
    'Understand fundamental programming concepts and logic',
    'Write clean, efficient, and well-documented code',
    'Apply problem-solving strategies to real-world scenarios',
    'Develop algorithmic thinking and computational skills',
    'Create basic applications and projects',
    'Collaborate effectively in team environments',
  ];

  const prerequisites = [
    'Basic math and logical reasoning skills',
    'Computer literacy and familiarity with operating systems',
    'Commitment to 8-10 hours of study per week',
    'A stable internet connection for online materials',
  ];

  const modules = [
    {
      id: 1,
      title: 'Module 1: Introduction to Computer Science',
      lessons: [
        { id: 1, title: 'What is Computer Science?', duration: '45 min' },
        { id: 2, title: 'History and Evolution of Computing', duration: '50 min' },
        { id: 3, title: 'Key Concepts and Terminology', duration: '60 min' },
      ],
    },
    {
      id: 2,
      title: 'Module 2: Programming Fundamentals',
      lessons: [
        { id: 4, title: 'Variables and Data Types', duration: '55 min' },
        { id: 5, title: 'Operators and Expressions', duration: '50 min' },
        { id: 6, title: 'Control Flow: If-Else Statements', duration: '65 min' },
      ],
    },
    {
      id: 3,
      title: 'Module 3: Functions and Modularity',
      lessons: [
        { id: 7, title: 'Defining and Calling Functions', duration: '60 min' },
        { id: 8, title: 'Function Parameters and Return Values', duration: '55 min' },
        { id: 9, title: 'Scope and Best Practices', duration: '50 min' },
      ],
    },
  ];

  const reviews = [
    {
      id: 1,
      studentName: 'Alice Johnson',
      rating: 5,
      date: '2025-11-15',
      title: 'Excellent course! Highly recommended!',
      text: 'This course was incredibly helpful in understanding the basics of computer science. Dr. Smith explains complex concepts in an easy-to-understand manner.',
      helpful: 234,
    },
    {
      id: 2,
      studentName: 'Bob Chen',
      rating: 4,
      date: '2025-11-10',
      title: 'Great content with practical examples',
      text: 'The course covers all the fundamentals well. The hands-on projects are very engaging. Would recommend to anyone starting their CS journey.',
      helpful: 189,
    },
    {
      id: 3,
      studentName: 'Carol Martinez',
      rating: 5,
      date: '2025-11-05',
      title: 'Life-changing experience',
      text: 'I had no programming background before this course. Now I can write functional programs! The instructor is patient and supportive.',
      helpful: 412,
    },
    {
      id: 4,
      studentName: 'David Lee',
      rating: 4,
      date: '2025-10-28',
      title: 'Solid fundamentals course',
      text: 'Good structured curriculum. Some topics could use more depth, but it\'s a good foundation for beginners.',
      helpful: 156,
    },
    {
      id: 5,
      studentName: 'Emma Wilson',
      rating: 5,
      date: '2025-10-20',
      title: 'Perfect for beginners!',
      text: 'As a complete beginner, I found this course perfect. The pace is great, and the examples are relevant. Definitely worth taking!',
      helpful: 289,
    },
  ];

  const relatedCourses = [
    { id: 2, title: 'Data Structures and Algorithms' },
    { id: 3, title: 'Web Development Fundamentals' },
    { id: 5, title: 'Software Engineering' },
  ];

  const toggleModuleExpand = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 !== 0 ? '☆' : '');
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
            <Link to="/courses" className="text-[#1a3a5c] no-underline hover:opacity-80">Course Catalog</Link>
            {' > '}
            <span>{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Quick Navigation Links */}
      <div className="bg-white border-b border-[#ddd] sticky top-0 z-10">
        <div className="max-w-[1100px] mx-auto px-6 py-4">
          <nav className="flex gap-6 flex-wrap text-sm">
            <button onClick={() => scrollToSection('overview')} className="text-[#1a3a5c] no-underline hover:opacity-80 bg-transparent border-none cursor-pointer">
              ↓ Jump to Overview
            </button>
            <button onClick={() => scrollToSection('syllabus')} className="text-[#1a3a5c] no-underline hover:opacity-80 bg-transparent border-none cursor-pointer">
              ↓ Jump to Syllabus
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-[#1a3a5c] no-underline hover:opacity-80 bg-transparent border-none cursor-pointer">
              ↓ Jump to Reviews
            </button>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[#1a3a5c] no-underline hover:opacity-80 bg-transparent border-none cursor-pointer ml-auto">
              ↑ Back to Top
            </button>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-12">
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Header Section */}
              <header className="mb-12">
                <div className="mb-4">
                  <span className="inline-block bg-[#1a3a5c] text-white px-3 py-1 rounded text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                <h1 className="mb-2 text-3xl font-bold text-[#1a3a5c]">{course.title}</h1>
                <p className="text-lg text-[#666]">{course.subtitle}</p>
                <div className="mt-4 text-sm text-[#999]">
                  {course.rating} ★ ({course.enrollment} students enrolled)
                </div>
              </header>

              {/* OVERVIEW SECTION */}
              <section id="overview" className="mb-12 pb-12 border-b border-[#ddd]">
                <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Overview</h2>

                {/* Hero Image with Figure */}
                <figure className="mb-8 border border-[#ddd] rounded overflow-hidden">
                  <div className="w-full h-[300px] bg-[#e0e0e0]">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
                      alt="Computer science classroom with students learning programming"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="bg-[#f9f9f9] px-6 py-3 text-sm text-[#666]">
                    Interactive learning environment in our computer science course
                  </figcaption>
                </figure>

                {/* Description */}
                <p className="text-[#333] mb-8 leading-relaxed">
                  {course.description}
                </p>

                {/* What You'll Learn */}
                <h3 className="text-xl font-bold text-[#1a3a5c] mb-4">What You'll Learn</h3>
                <ol className="list-decimal list-inside mb-8 space-y-2 text-[#333]">
                  {learningOutcomes.map((outcome, idx) => (
                    <li key={idx}>{outcome}</li>
                  ))}
                </ol>

                {/* Prerequisites */}
                <h3 className="text-xl font-bold text-[#1a3a5c] mb-4">Course Prerequisites</h3>
                <ul className="list-disc list-inside mb-8 space-y-2 text-[#333]">
                  {prerequisites.map((prereq, idx) => (
                    <li key={idx}>{prereq}</li>
                  ))}
                </ul>
              </section>

              {/* SYLLABUS SECTION */}
              <section id="syllabus" className="mb-12 pb-12 border-b border-[#ddd]">
                <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Course Syllabus</h2>

                {modules.map((module) => (
                  <article key={module.id} className="mb-6 border border-[#ddd] rounded overflow-hidden">
                    <div className="bg-[#f9f9f9] p-6 cursor-pointer hover:bg-[#f0f0f0]" onClick={() => toggleModuleExpand(module.id)}>
                      <h3 className="text-lg font-medium text-[#1a3a5c] flex justify-between items-center">
                        {module.title}
                        <span>{expandedModule === module.id ? '−' : '+'}</span>
                      </h3>
                    </div>

                    {expandedModule === module.id && (
                      <div className="p-6 border-t border-[#ddd]">
                        {module.lessons.map((lesson, idx) => (
                          <section key={lesson.id} className="mb-4 pb-4 last:mb-0 last:pb-0 border-b border-[#eee] last:border-b-0">
                            <h4 className="font-medium text-[#333] mb-2">
                              Lesson {idx + 1}: {lesson.title}
                            </h4>
                            <p className="text-sm text-[#666]">
                              Duration: {lesson.duration}
                            </p>
                          </section>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </section>

              {/* REVIEWS SECTION */}
              <section id="reviews" className="mb-12">
                <h2 className="text-2xl font-bold text-[#1a3a5c] mb-6">Student Reviews</h2>

                {/* Average Rating */}
                <div className="bg-[#f9f9f9] border border-[#ddd] p-6 rounded mb-8">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-4xl font-bold text-[#1a3a5c]">{course.rating}</div>
                      <div className="text-[#666]">{renderStars(course.rating)}</div>
                    </div>
                    <div className="text-[#666]">
                      <p>Based on {reviews.length} reviews</p>
                      <p className="text-sm">Highly rated by our students</p>
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <article key={review.id} className="border border-[#ddd] p-6 rounded bg-white">
                      <div className="flex gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#ddd] flex-shrink-0">
                          <ImageWithFallback
                            src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80&auto=format&crop=entropy&cs=tinysrgb`}
                            alt={review.studentName}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-[#333]">{review.studentName}</h4>
                          <div className="flex gap-4 text-sm text-[#666]">
                            <span>{renderStars(review.rating)}</span>
                            <time dateTime={review.date}>
                              {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </time>
                          </div>
                        </div>
                      </div>
                      <h5 className="font-medium text-[#1a3a5c] mb-2">{review.title}</h5>
                      <p className="text-[#333] mb-4">{review.text}</p>
                      <div className="text-sm text-[#999]">
                        👍 {review.helpful} people found this helpful
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="w-full md:w-[300px] flex-shrink-0">
              {/* Course Information Box */}
              <div className="border border-[#ddd] rounded p-6 mb-6 bg-[#f9f9f9] sticky top-[100px]">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-[#1a3a5c] mb-4">{course.price}</div>
                  <button className="w-full bg-[#1a3a5c] text-white border-none px-4 py-3 rounded cursor-pointer hover:opacity-90 font-medium mb-3">
                    Enroll Now
                  </button>
                  <button className="w-full bg-white text-[#1a3a5c] border-2 border-[#1a3a5c] px-4 py-3 rounded cursor-pointer hover:bg-[#f9f9f9]">
                    Add to Wishlist
                  </button>
                </div>

                <h3 className="text-lg font-medium text-[#1a3a5c] mb-4">Course Details</h3>
                <dl className="space-y-3 text-sm">
                  <div className="border-b border-[#eee] pb-3 last:border-b-0">
                    <dt className="font-medium text-[#1a3a5c]">Price:</dt>
                    <dd className="text-[#333]">{course.price}</dd>
                  </div>
                  <div className="border-b border-[#eee] pb-3 last:border-b-0">
                    <dt className="font-medium text-[#1a3a5c]">Duration:</dt>
                    <dd className="text-[#333]">{course.duration}</dd>
                  </div>
                  <div className="border-b border-[#eee] pb-3 last:border-b-0">
                    <dt className="font-medium text-[#1a3a5c]">Time Commitment:</dt>
                    <dd className="text-[#333]">{course.timeCommitment}</dd>
                  </div>
                  <div className="border-b border-[#eee] pb-3 last:border-b-0">
                    <dt className="font-medium text-[#1a3a5c]">Level:</dt>
                    <dd className="text-[#333]">{course.level}</dd>
                  </div>
                  <div className="border-b border-[#eee] pb-3 last:border-b-0">
                    <dt className="font-medium text-[#1a3a5c]">Language:</dt>
                    <dd className="text-[#333]">{course.language}</dd>
                  </div>
                  <div className="border-b border-[#eee] pb-3 last:border-b-0">
                    <dt className="font-medium text-[#1a3a5c]">Certificate:</dt>
                    <dd className="text-[#333]">{course.certificate}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-[#1a3a5c]">Enrolled:</dt>
                    <dd className="text-[#333]">{course.enrollment} students</dd>
                  </div>
                </dl>

                {/* Share Section */}
                <div className="mt-6 pt-6 border-t border-[#ddd]">
                  <h4 className="font-medium text-[#1a3a5c] mb-3">Share this course</h4>
                  <div className="flex gap-3">
                    <a href="#" className="text-[#1a3a5c] no-underline hover:opacity-80" title="Share on Facebook">
                      f
                    </a>
                    <a href="#" className="text-[#1a3a5c] no-underline hover:opacity-80" title="Share on Twitter">
                      𝕏
                    </a>
                    <a href="#" className="text-[#1a3a5c] no-underline hover:opacity-80" title="Share on LinkedIn">
                      in
                    </a>
                    <a href="#" className="text-[#1a3a5c] no-underline hover:opacity-80" title="Copy link">
                      🔗
                    </a>
                  </div>
                </div>
              </div>

              {/* Instructor Bio */}
              <div className="border border-[#ddd] rounded p-6 mb-6">
                <h3 className="text-lg font-medium text-[#1a3a5c] mb-4">About the Instructor</h3>

                <figure className="mb-4 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#ddd] mb-3 overflow-hidden">
                    <ImageWithFallback
                      src={course.instructor.photo}
                      alt={course.instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <figcaption className="text-center">
                    <h4 className="font-medium text-[#333]">{course.instructor.name}</h4>
                  </figcaption>
                </figure>

                <p className="text-sm text-[#666]">{course.instructor.bio}</p>
              </div>

              {/* Related Courses */}
              <div className="border border-[#ddd] rounded p-6">
                <h3 className="text-lg font-medium text-[#1a3a5c] mb-4">Related Courses</h3>
                <ul className="list-none m-0 p-0 space-y-2">
                  {relatedCourses.map((relatedCourse) => (
                    <li key={relatedCourse.id}>
                      <Link
                        to={`/course/${relatedCourse.id}`}
                        className="text-[#1a3a5c] no-underline hover:opacity-80 text-sm"
                      >
                        → {relatedCourse.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
