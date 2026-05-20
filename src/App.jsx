import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import SingleNewsPage from './pages/SingleNewsPage';
import CategoryPage from './pages/CategoryPage';
import DistrictNewsPage from './pages/DistrictNewsPage';
import SearchPage from './pages/SearchPage';
import VideoNewsPage from './pages/VideoNewsPage';
import PhotoGalleryPage from './pages/PhotoGalleryPage';
import AuthorProfilePage from './pages/AuthorProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news/:id" element={<SingleNewsPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/district/:name" element={<DistrictNewsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/videos" element={<VideoNewsPage />} />
            <Route path="/gallery" element={<PhotoGalleryPage />} />
            <Route path="/author/:id" element={<AuthorProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
