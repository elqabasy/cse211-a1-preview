import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { RegistrationPage } from './components/RegistrationPage';
import { ThankYouPage } from './components/ThankYouPage';
import { CourseCatalogPage } from './components/CourseCatalogPage';
import { CourseDetailPage } from './components/CourseDetailPage';
import { StudentDashboardPage } from './components/StudentDashboardPage';
import { HashRouter } from 'react-router-dom';
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/courses" element={<CourseCatalogPage />} />
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
      </Routes>
    </HashRouter>
  );
}
