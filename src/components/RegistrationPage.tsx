import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function RegistrationPage() {
  const navigate = useNavigate();
  const today = new Date();
  const maxBirthDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()).toISOString().split('T')[0];

  const [charCount, setCharCount] = useState(0);
  const [goalCount, setGoalCount] = useState(0);
  const [formData, setFormData] = useState({
    // Section 1: Personal Information
    fullName: '',
    studentId: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    profilePhoto: null as File | null,

    // Section 2: Academic Information
    degreeLevel: "bachelor",
    major: '',
    semester: '',
    gpa: '',
    programmingExperience: [] as string[],

    // Section 3: Course Preferences
    learningMode: '',
    courseCategories: [] as string[],
    classSchedule: '',
    primaryCourse: '',
    alternativeCourses: [] as string[],

    // Section 4: Additional Information
    howDidYouHear: '',
    specialRequirements: '',
    learningGoals: '',

    // Section 5: Terms and Conditions
    termsAgreement: false,
    privacyPolicy: false,
    newsletter: false,
    marketingComms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const inputElement = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: inputElement.checked,
      }));
    } else if (type === 'file') {
      const inputElement = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: inputElement.files ? inputElement.files[0] : null,
      }));
    } else if (name === 'specialRequirements') {
      setCharCount(value.length);
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    } else if (name === 'learningGoals') {
      setGoalCount(value.length);
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleMultiSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);

    setFormData(prev => ({
      ...prev,
      [name]: selectedValues,
    }));
  };

  const handleCheckboxGroup = (name: string, value: string) => {
    setFormData(prev => {
      const current = prev[name as keyof typeof formData] as string[];
      if (current.includes(value)) {
        return {
          ...prev,
          [name]: current.filter(item => item !== value),
        };
      } else {
        return {
          ...prev,
          [name]: [...current, value],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword && formData.termsAgreement && formData.privacyPolicy) {
      navigate('/thank-you');
    }
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    form.reset();
    setFormData({
      fullName: '',
      studentId: '',
      email: '',
      password: '',
      confirmPassword: '',
      dateOfBirth: '',
      gender: '',
      profilePhoto: null,
      degreeLevel: "bachelor",
      major: '',
      semester: '',
      gpa: '',
      programmingExperience: [],
      learningMode: '',
      courseCategories: [],
      classSchedule: '',
      primaryCourse: '',
      alternativeCourses: [],
      howDidYouHear: '',
      specialRequirements: '',
      learningGoals: '',
      termsAgreement: false,
      privacyPolicy: false,
      newsletter: false,
      marketingComms: false,
    });
    setCharCount(0);
    setGoalCount(0);
  };

  const handleSaveDraft = () => {
    localStorage.setItem('registrationFormDraft', JSON.stringify(formData));
    alert('Form draft saved successfully!');
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
            <span>Registration</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-[900px] mx-auto px-6 py-12">
          <h1 className="mb-2">Student Registration Form</h1>
          <p className="mb-8 text-[#666]">Fall 2025-2026 Semester</p>

          <form
            id="registrationForm"
            name="registrationForm"
            action="/pages/thank.html"
            method="get"
            onSubmit={handleSubmit}
            className="border border-[#ddd] bg-white p-6"
          >
            {/* Hidden Fields */}
            <input type="hidden" name="formVersion" value="1.0" />
            <input type="hidden" name="submissionDate" id="submissionDate" value={new Date().toISOString()} />
            <input type="hidden" name="userAgent" id="userAgent" value={navigator.userAgent} />

            {/* SECTION 1: PERSONAL INFORMATION */}
            <fieldset className="mb-8 pb-6 border-b border-[#ddd]">
              <legend className="text-xl font-medium mb-6 text-[#1a3a5c]">Section 1: Personal Information</legend>

              <div className="mb-6">
                <label htmlFor="fullName" className="block mb-2">
                  Full Name <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  minLength={3}
                  maxLength={50}
                  placeholder="Enter your full name"
                  title="Full name must be between 3 and 50 characters"
                  autoFocus
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="studentId" className="block mb-2">
                  Student ID <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                  pattern="^\d{9}$"
                  placeholder="123456789"
                  title="Student ID must be exactly 9 digits (e.g., 123456789)"
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
                <span className="help-text text-sm text-[#666]">Format: 9 digits only</span>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2">
                  Email Address <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="student@example.com"
                  title="Please enter a valid email address"
                  autoComplete="email"
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block mb-2">
                  Password <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
                  maxLength={20}
                  placeholder="Minimum 8 characters"
                  title="Password must be between 8 and 20 characters"
                  autoComplete="new-password"
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block mb-2">
                  Confirm Password <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength={8}
                  maxLength={20}
                  placeholder="Re-enter your password"
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="dateOfBirth" className="block mb-2">
                  Date of Birth <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  max={maxBirthDate}
                  title="You must be at least 18 years old"
                  autoComplete="bday"
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
              </div>

              <fieldset className="mb-6 p-4 bg-[#f9f9f9] rounded border border-[#ddd]">
                <legend className="text-base font-medium mb-4">
                  Gender <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </legend>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Female
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="prefer-not-to-say"
                      checked={formData.gender === 'prefer-not-to-say'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Prefer not to say
                  </label>
                </div>
              </fieldset>

              <div className="mb-6">
                <label htmlFor="profilePhoto" className="block mb-2">
                  Profile Photo <span style={{ color: '#999' }}>(Optional)</span>
                </label>
                <input
                  type="file"
                  id="profilePhoto"
                  name="profilePhoto"
                  onChange={handleChange}
                  accept="image/*"
                  title="Upload a profile photo (image files only)"
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
                <span className="help-text text-sm text-[#666]">Accepted formats: JPG, PNG, GIF</span>
              </div>
            </fieldset>

            {/* SECTION 2: ACADEMIC INFORMATION */}
            <fieldset className="mb-8 pb-6 border-b border-[#ddd]">
              <legend className="text-xl font-medium mb-6 text-[#1a3a5c]">Section 2: Academic Information</legend>

              <fieldset className="mb-6 p-4 bg-[#f9f9f9] rounded border border-[#ddd]">
                <legend className="text-base font-medium mb-4">
                  Current Degree Level <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </legend>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="degreeLevel"
                      value="bachelor"
                      checked={formData.degreeLevel === 'bachelor'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Bachelor's Degree
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="degreeLevel"
                      value="master"
                      checked={formData.degreeLevel === 'master'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Master's Degree
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="degreeLevel"
                      value="phd"
                      checked={formData.degreeLevel === 'phd'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    PhD
                  </label>
                </div>
              </fieldset>

              <div className="mb-6">
                <label htmlFor="major" className="block mb-2">
                  Major/Department <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <select
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                >
                  <option value="">-- Select Your Major --</option>
                  <optgroup label="Faculty of Engineering">
                    <option value="cs">Computer Science</option>
                    <option value="it">Information Technology</option>
                    <option value="se">Software Engineering</option>
                    <option value="ce">Computer Engineering</option>
                  </optgroup>
                  <optgroup label="Faculty of Business">
                    <option value="marketing">Marketing</option>
                    <option value="finance">Finance</option>
                    <option value="management">Management</option>
                    <option value="accounting">Accounting</option>
                  </optgroup>
                  <optgroup label="Faculty of Science">
                    <option value="math">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="biology">Biology</option>
                    <option value="chemistry">Chemistry</option>
                  </optgroup>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="semester" className="block mb-2">
                    Current Semester <span className="required" style={{ color: '#d32f2f' }}>*</span>
                  </label>
                  <input
                    type="number"
                    id="semester"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    required
                    min={1}
                    max={12}
                    placeholder="1-12"
                    title="Enter semester between 1 and 12"
                    className="w-full border border-[#ccc] px-3 py-2 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="gpa" className="block mb-2">
                    Current GPA <span style={{ color: '#999' }}>(Optional)</span>
                  </label>
                  <input
                    type="number"
                    id="gpa"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange}
                    min={0}
                    max={4}
                    step={0.01}
                    placeholder="0.00 - 4.00"
                    title="Enter GPA between 0.00 and 4.00"
                    className="w-full border border-[#ccc] px-3 py-2 rounded"
                  />
                </div>
              </div>

              <fieldset className="p-4 bg-[#f9f9f9] rounded border border-[#ddd]">
                <legend className="text-base font-medium mb-4">Previous Programming Experience</legend>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Python', 'Java', 'C++', 'JavaScript', 'PHP', 'C#', 'None'].map(lang => (
                    <label key={lang} className="flex items-center">
                      <input
                        type="checkbox"
                        name="programmingExperience"
                        value={lang.toLowerCase()}
                        checked={formData.programmingExperience.includes(lang.toLowerCase())}
                        onChange={() => handleCheckboxGroup('programmingExperience', lang.toLowerCase())}
                        className="mr-2"
                      />
                      {lang}
                    </label>
                  ))}
                </div>
              </fieldset>
            </fieldset>

            {/* SECTION 3: COURSE PREFERENCES */}
            <fieldset className="mb-8 pb-6 border-b border-[#ddd]">
              <legend className="text-xl font-medium mb-6 text-[#1a3a5c]">Section 3: Course Preferences</legend>

              <fieldset className="mb-6 p-4 bg-[#f9f9f9] rounded border border-[#ddd]">
                <legend className="text-base font-medium mb-4">
                  Preferred Learning Mode <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </legend>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="learningMode"
                      value="on-campus"
                      checked={formData.learningMode === 'on-campus'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    On-Campus
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="learningMode"
                      value="online"
                      checked={formData.learningMode === 'online'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Online
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="learningMode"
                      value="hybrid"
                      checked={formData.learningMode === 'hybrid'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    Hybrid (Mixed)
                  </label>
                </div>
              </fieldset>

              <div className="mb-6">
                <label htmlFor="courseCategories" className="block mb-2">
                  Course Categories of Interest <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <select
                  id="courseCategories"
                  name="courseCategories"
                  value={formData.courseCategories}
                  onChange={handleMultiSelect}
                  required
                  multiple
                  size={5}
                  className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                  aria-describedby="categoriesHelp"
                >
                  <option value="web-dev">Web Development</option>
                  <option value="mobile-dev">Mobile Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="game-dev">Game Development</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="database">Database Management</option>
                  <option value="devops">DevOps</option>
                  <option value="blockchain">Blockchain Technology</option>
                </select>
                <span id="categoriesHelp" className="help-text text-sm text-[#666]">
                  Select 1-3 categories (Hold Ctrl/Cmd for multiple)
                </span>
              </div>

              <div className="mb-6">
                <label htmlFor="classSchedule" className="block mb-2">
                  Preferred Class Schedule <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <select
                  id="classSchedule"
                  name="classSchedule"
                  value={formData.classSchedule}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                >
                  <option value="">-- Select Schedule --</option>
                  <option value="morning">Morning 8:00 AM - 12:00 PM</option>
                  <option value="afternoon">Afternoon 12:00 PM - 4:00 PM</option>
                  <option value="evening">Evening 4:00 PM - 8:00 PM</option>
                  <option value="weekend">Weekend Saturday & Sunday</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="primaryCourse" className="block mb-2">
                  Primary Course Selection <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <select
                  id="primaryCourse"
                  name="primaryCourse"
                  value={formData.primaryCourse}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                >
                  <option value="">-- Select Primary Course --</option>
                  <optgroup label="Web Development">
                    <option value="html-css">HTML & CSS Fundamentals</option>
                    <option value="advanced-js">Advanced JavaScript</option>
                    <option value="react">React.js Development</option>
                    <option value="node">Node.js & Backend</option>
                  </optgroup>
                  <optgroup label="Mobile Development">
                    <option value="android">Android Development</option>
                    <option value="ios">iOS Development</option>
                    <option value="flutter">Flutter Cross-Platform</option>
                  </optgroup>
                  <optgroup label="Data & AI">
                    <option value="python-ds">Python for Data Science</option>
                    <option value="ml">Machine Learning</option>
                    <option value="dl">Deep Learning</option>
                  </optgroup>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="alternativeCourses" className="block mb-2">
                  Alternative Courses <span style={{ color: '#999' }}>(Optional)</span>
                </label>
                <select
                  id="alternativeCourses"
                  name="alternativeCourses"
                  value={formData.alternativeCourses}
                  onChange={handleMultiSelect}
                  multiple
                  size={4}
                  className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                  title="Select up to 3 alternative courses"
                >
                  <option value="sql">SQL & Databases</option>
                  <option value="git">Git & Version Control</option>
                  <option value="docker">Docker & Containers</option>
                  <option value="aws">AWS Cloud Basics</option>
                  <option value="websec">Web Security</option>
                  <option value="testing">Software Testing</option>
                </select>
              </div>
            </fieldset>

            {/* SECTION 4: ADDITIONAL INFORMATION */}
            <fieldset className="mb-8 pb-6 border-b border-[#ddd]">
              <legend className="text-xl font-medium mb-6 text-[#1a3a5c]">Section 4: Additional Information</legend>

              <div className="mb-6">
                <label htmlFor="howDidYouHear" className="block mb-2">
                  How did you hear about us? <span className="required" style={{ color: '#d32f2f' }}>*</span>
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#ccc] px-3 py-2 rounded bg-white"
                >
                  <option value="">-- Please Select --</option>
                  <option value="search">Search Engine (Google, Bing)</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend or Colleague</option>
                  <option value="announcement">University Announcement</option>
                  <option value="advertisement">Online Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="specialRequirements" className="block mb-2">
                  Special Requirements or Accessibility Needs <span style={{ color: '#999' }}>(Optional)</span>
                </label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows={4}
                  cols={50}
                  maxLength={500}
                  placeholder="Please describe any special requirements or accessibility needs..."
                  title="Maximum 500 characters"
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
                <div className="flex justify-between text-sm text-[#666] mt-1">
                  <span>Character count:</span>
                  <span>{charCount}/500</span>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="learningGoals" className="block mb-2">
                  Your Learning Goals and Expectations <span style={{ color: '#999' }}>(Optional)</span>
                </label>
                <textarea
                  id="learningGoals"
                  name="learningGoals"
                  value={formData.learningGoals}
                  onChange={handleChange}
                  rows={5}
                  cols={50}
                  maxLength={500}
                  placeholder="What are your learning goals and expectations for this program?"
                  className="w-full border border-[#ccc] px-3 py-2 rounded"
                />
                <div className="flex justify-between text-sm text-[#666] mt-1">
                  <span>Character count:</span>
                  <span>{goalCount}/500</span>
                </div>
              </div>
            </fieldset>

            {/* SECTION 5: TERMS AND CONDITIONS */}
            <fieldset className="mb-8 pb-6 border-b border-[#ddd]">
              <legend className="text-xl font-medium mb-6 text-[#1a3a5c]">Section 5: Terms and Conditions</legend>

              <div className="mb-4 p-4 bg-[#f9f9f9] rounded border border-[#ddd]">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="termsAgreement"
                    checked={formData.termsAgreement}
                    onChange={handleChange}
                    required
                    className="mr-3 mt-1"
                  />
                  <span>
                    I agree to the <Link to="/terms" className="text-[#1a3a5c] no-underline hover:opacity-80">Terms and Conditions</Link> <span className="required" style={{ color: '#d32f2f' }}>*</span>
                  </span>
                </label>
              </div>

              <div className="mb-4 p-4 bg-[#f9f9f9] rounded border border-[#ddd]">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyPolicy"
                    checked={formData.privacyPolicy}
                    onChange={handleChange}
                    required
                    className="mr-3 mt-1"
                  />
                  <span>
                    I have read and accept the <Link to="/privacy" className="text-[#1a3a5c] no-underline hover:opacity-80">Privacy Policy</Link> <span className="required" style={{ color: '#d32f2f' }}>*</span>
                  </span>
                </label>
              </div>

              <div className="mb-4 p-4 bg-[#f9f9f9] rounded border border-[#ddd]">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mr-3 mt-1"
                  />
                  <span>
                    Subscribe to our newsletter for course updates and special offers <span style={{ color: '#999' }}>(Optional)</span>
                  </span>
                </label>
              </div>

              <div className="mb-6 p-4 bg-[#f9f9f9] rounded border border-[#ddd]">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingComms"
                    checked={formData.marketingComms}
                    onChange={handleChange}
                    className="mr-3 mt-1"
                  />
                  <span>
                    I agree to receive marketing communications via email <span style={{ color: '#999' }}>(Optional)</span>
                  </span>
                </label>
              </div>
            </fieldset>

            {/* FORM CONTROLS */}
            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                name="submitBtn"
                id="submitBtn"
                className="bg-[#1a3a5c] text-white border-none px-6 py-2 rounded cursor-pointer hover:opacity-90"
              >
                Register Now
              </button>
              <button
                type="reset"
                name="resetBtn"
                id="resetBtn"
                onClick={(e) => handleReset(e as any)}
                title="Clear all form fields"
                className="bg-[#666] text-white border-none px-6 py-2 rounded cursor-pointer hover:opacity-90"
              >
                Clear Form
              </button>
              <button
                type="button"
                name="saveDraftBtn"
                id="saveDraftBtn"
                onClick={handleSaveDraft}
                className="bg-[#f0f0f0] text-[#333] border border-[#ddd] px-6 py-2 rounded cursor-pointer hover:bg-[#e0e0e0]"
              >
                Save Draft
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
