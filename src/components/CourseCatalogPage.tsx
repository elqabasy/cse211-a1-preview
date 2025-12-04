import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CourseCatalogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const allCourses = [
    {
      id: 1,
      title: 'Introduction to Computer Science',
      category: 'programming',
      description: 'Learn the fundamentals of programming and computational thinking with hands-on projects.',
      instructor: 'Dr. Jane Smith',
      duration: '12 weeks',
      level: 'Beginner',
      price: '$299',
      rating: 4.5,
      enrollment: 1250,
      features: ['Live Sessions', 'Hands-on Projects', 'Certification'],
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      category: 'programming',
      description: 'Master essential data structures and algorithmic problem solving techniques.',
      instructor: 'Prof. John Davis',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$349',
      rating: 4.8,
      enrollment: 980,
      features: ['Interactive Coding', 'Problem Sets', 'Peer Review'],
    },
    {
      id: 3,
      title: 'Web Development Fundamentals',
      category: 'web',
      description: 'Build modern web applications with HTML, CSS, and JavaScript from scratch.',
      instructor: 'Dr. Emily Chen',
      duration: '8 weeks',
      level: 'Beginner',
      price: '$279',
      rating: 4.6,
      enrollment: 1520,
      features: ['Project-Based', 'Portfolio Building', 'Job Ready'],
    },
    {
      id: 4,
      title: 'Database Management Systems',
      category: 'database',
      description: 'Understand database design, SQL queries, and data management principles.',
      instructor: 'Prof. Michael Brown',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '$329',
      rating: 4.4,
      enrollment: 750,
      features: ['SQL Training', 'Design Patterns', 'Case Studies'],
    },
    {
      id: 5,
      title: 'Software Engineering',
      category: 'engineering',
      description: 'Learn software development lifecycle, testing, and project management.',
      instructor: 'Dr. Sarah Wilson',
      duration: '12 weeks',
      level: 'Advanced',
      price: '$399',
      rating: 4.7,
      enrollment: 650,
      features: ['Team Projects', 'Agile Methods', 'Industry Best Practices'],
    },
    {
      id: 6,
      title: 'Operating Systems',
      category: 'systems',
      description: 'Explore OS concepts including processes, memory management, and file systems.',
      instructor: 'Prof. Robert Johnson',
      duration: '14 weeks',
      level: 'Advanced',
      price: '$399',
      rating: 4.3,
      enrollment: 520,
      features: ['Deep Dive', 'System Design', 'Advanced Concepts'],
    },
  ];

  // Filter courses
  let filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    const matchesDuration = !selectedDuration || course.duration === selectedDuration;
    const matchesRating = !selectedRating || course.rating >= parseFloat(selectedRating);

    return matchesSearch && matchesCategory && matchesLevel && matchesDuration && matchesRating;
  });

  // Sort courses
  if (sortBy === 'price') {
    filteredCourses.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
  } else if (sortBy === 'rating') {
    filteredCourses.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    filteredCourses.reverse();
  } else {
    // popularity (enrollment)
    filteredCourses.sort((a, b) => b.enrollment - a.enrollment);
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const handleApplyFilters = () => {
    // Filters are applied in real-time, this is just a button for semantic purposes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const comparisonCourses = filteredCourses.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-[#f5f5f5] border-b border-[#ddd]">
        <div className="max-w-[1100px] mx-auto px-6 py-3">
          <nav aria-label="Breadcrumb">
            <Link to="/" className="text-[#1a3a5c] no-underline hover:opacity-80">Home</Link>
            {' > '}
            <span>Course Catalog</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-[1100px] mx-auto px-6 py-12">
          <header className="mb-8">
            <h1 className="mb-4">Course Catalog</h1>
            <p className="text-[#666]">Explore our comprehensive selection of courses and start learning today.</p>
          </header>

          {/* Search Form Section */}
          <section className="mb-8">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="searchInput" className="block mb-2 font-medium text-[#1a3a5c]">Search Courses</label>
                <input
                  id="searchInput"
                  type="search"
                  placeholder="Search by course name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border border-[#ccc] px-4 py-2 rounded"
                />
              </div>

              {/* Sorting Section */}
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="sortDropdown" className="block mb-2 font-medium text-[#1a3a5c]">Sort By</label>
                  <select
                    id="sortDropdown"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price">Price (Low to High)</option>
                    <option value="rating">Rating (High to Low)</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor="resultsCounter" className="block mb-2 font-medium text-[#1a3a5c]">Results</label>
                  <div id="resultsCounter" className="border border-[#ccc] px-3 py-2 rounded bg-[#f9f9f9] flex items-center">
                    <span className="text-[#666]">Showing <strong>{filteredCourses.length}</strong> course{filteredCourses.length !== 1 ? 's' : ''}</span>
                  </div>
                </div>
              </div>
            </form>
          </section>

          {/* Main content with sidebar */}
          <div className="flex gap-8">
            {/* Aside - Filter Section */}
            <aside className="w-full md:w-[20%]">
              <form className="border border-[#ddd] p-4 bg-[#f9f9f9] rounded">
                <h2 className="text-lg font-medium mb-6 text-[#1a3a5c]">Filters</h2>

                {/* Category Filter */}
                <fieldset className="mb-6 pb-6 border-b border-[#ddd]">
                  <legend className="font-medium text-[#1a3a5c] mb-3">Category</legend>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="programming"
                        checked={selectedCategories.includes('programming')}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">Programming</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="web"
                        checked={selectedCategories.includes('web')}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">Web Development</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="database"
                        checked={selectedCategories.includes('database')}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">Database</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="engineering"
                        checked={selectedCategories.includes('engineering')}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">Engineering</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        value="systems"
                        checked={selectedCategories.includes('systems')}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">Systems</span>
                    </label>
                  </div>
                </fieldset>

                {/* Level Filter */}
                <fieldset className="mb-6 pb-6 border-b border-[#ddd]">
                  <legend className="font-medium text-[#1a3a5c] mb-3">Level</legend>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="level"
                        value=""
                        checked={selectedLevel === ''}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">All Levels</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="level"
                        value="Beginner"
                        checked={selectedLevel === 'Beginner'}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">Beginner</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="level"
                        value="Intermediate"
                        checked={selectedLevel === 'Intermediate'}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">Intermediate</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="level"
                        value="Advanced"
                        checked={selectedLevel === 'Advanced'}
                        onChange={(e) => setSelectedLevel(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-[#333]">Advanced</span>
                    </label>
                  </div>
                </fieldset>

                {/* Duration Filter */}
                <fieldset className="mb-6 pb-6 border-b border-[#ddd]">
                  <legend className="font-medium text-[#1a3a5c] mb-3">Duration</legend>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                  >
                    <option value="">Any Duration</option>
                    <option value="8 weeks">8 weeks</option>
                    <option value="10 weeks">10 weeks</option>
                    <option value="12 weeks">12 weeks</option>
                    <option value="14 weeks">14 weeks</option>
                  </select>
                </fieldset>

                {/* Rating Filter */}
                <fieldset className="mb-6">
                  <legend className="font-medium text-[#1a3a5c] mb-3">Minimum Rating</legend>
                  <select
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                  >
                    <option value="">Any Rating</option>
                    <option value="4.0">4.0 & up ★★★★</option>
                    <option value="4.5">4.5 & up ★★★★★</option>
                  </select>
                </fieldset>

                {/* Apply Filters Button */}
                <button
                  onClick={handleApplyFilters}
                  className="w-full bg-[#1a3a5c] text-white border-none px-4 py-2 rounded cursor-pointer hover:opacity-90 font-medium"
                >
                  Apply Filters
                </button>
              </form>
            </aside>

            {/* Main Content Area */}
            <div className="w-full md:w-[80%]">
              {/* Course Grid */}
              <section className="mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredCourses.map((course) => (
                    <article key={course.id} className="border border-[#ddd] bg-white rounded overflow-hidden hover:shadow-lg transition">
                      {/* Figure with figcaption */}
                      <figure className="m-0">
                        <div className="w-full h-[200px] bg-[#e0e0e0]">
                          <ImageWithFallback
                            src={`https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop&sig=${course.id}`}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <figcaption className="text-xs text-[#999] px-4 pt-2 pb-1">
                          {course.level} • {course.duration}
                        </figcaption>
                      </figure>

                      <div className="p-4">
                        {/* Course Title */}
                        <h3 className="mb-2 text-[#1a3a5c]">{course.title}</h3>

                        {/* Description */}
                        <p className="text-sm text-[#666] mb-3">{course.description}</p>

                        {/* Course Features List */}
                        <ul className="list-none m-0 p-0 mb-4 text-xs">
                          {course.features.map((feature, idx) => (
                            <li key={idx} className="text-[#666] py-1">
                              ✓ {feature}
                            </li>
                          ))}
                        </ul>

                        {/* Instructor */}
                        <p className="text-sm text-[#666] mb-3">
                          <strong>Instructor:</strong> {course.instructor}
                        </p>

                        {/* Definition List for course info */}
                        <dl className="mb-4 text-sm bg-[#f9f9f9] p-3 rounded">
                          <div className="flex justify-between mb-2">
                            <dt className="font-medium text-[#1a3a5c]">Price:</dt>
                            <dd className="text-[#333]">{course.price}</dd>
                          </div>
                          <div className="flex justify-between mb-2">
                            <dt className="font-medium text-[#1a3a5c]">Duration:</dt>
                            <dd className="text-[#333]">{course.duration}</dd>
                          </div>
                          <div className="flex justify-between mb-2">
                            <dt className="font-medium text-[#1a3a5c]">Level:</dt>
                            <dd className="text-[#333]">{course.level}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="font-medium text-[#1a3a5c]">Rating:</dt>
                            <dd className="text-[#333]">
                              {course.rating} ★ ({course.enrollment} enrolled)
                            </dd>
                          </div>
                        </dl>

                        {/* View Details Link */}
                        <Link to={`/course/${course.id}`}>
                          <button className="w-full bg-[#1a3a5c] text-white border-none px-4 py-2 rounded cursor-pointer hover:opacity-90">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                {filteredCourses.length === 0 && (
                  <p className="text-center text-[#666] py-12">
                    No courses match your search criteria. Please adjust your filters.
                  </p>
                )}
              </section>

              {/* Course Comparison Table */}
              {comparisonCourses.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-xl font-medium mb-6 text-[#1a3a5c]">Course Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-[#ddd]">
                      <caption className="mb-4 text-sm text-[#666] text-left">
                        Comparison of the top courses based on current filters
                      </caption>
                      <thead className="bg-[#f5f5f5]">
                        <tr>
                          <th className="border border-[#ddd] px-4 py-3 text-left font-medium text-[#1a3a5c]">Course Name</th>
                          <th className="border border-[#ddd] px-4 py-3 text-left font-medium text-[#1a3a5c]">Price</th>
                          <th className="border border-[#ddd] px-4 py-3 text-left font-medium text-[#1a3a5c]">Duration</th>
                          <th className="border border-[#ddd] px-4 py-3 text-left font-medium text-[#1a3a5c]">Level</th>
                          <th className="border border-[#ddd] px-4 py-3 text-left font-medium text-[#1a3a5c]">Rating</th>
                          <th className="border border-[#ddd] px-4 py-3 text-left font-medium text-[#1a3a5c]">Enrollment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonCourses.map((course, idx) => (
                          <tr key={course.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'}>
                            <td className="border border-[#ddd] px-4 py-3 text-[#333]">
                              <Link to={`/course/${course.id}`} className="text-[#1a3a5c] no-underline hover:opacity-80">
                                {course.title}
                              </Link>
                            </td>
                            <td className="border border-[#ddd] px-4 py-3 text-[#333]">{course.price}</td>
                            <td className="border border-[#ddd] px-4 py-3 text-[#333]">{course.duration}</td>
                            <td className="border border-[#ddd] px-4 py-3 text-[#333]">{course.level}</td>
                            <td className="border border-[#ddd] px-4 py-3 text-[#333]">{course.rating} ★</td>
                            <td className="border border-[#ddd] px-4 py-3 text-[#333]">{course.enrollment}</td>
                          </tr>
                        ))}
                        {/* Merged cell row for total pricing */}
                        <tr className="bg-[#f0f0f0] font-medium">
                          <td className="border border-[#ddd] px-4 py-3 text-[#1a3a5c]" colSpan={2}>
                            Average Price
                          </td>
                          <td className="border border-[#ddd] px-4 py-3 text-[#333]">
                            ${Math.round(comparisonCourses.reduce((sum, c) => sum + parseFloat(c.price.slice(1)), 0) / comparisonCourses.length)}
                          </td>
                          <td colSpan={3} className="border border-[#ddd] px-4 py-3 text-[#666]">
                            Based on selected courses
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
