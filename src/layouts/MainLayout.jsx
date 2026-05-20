import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BreakingNewsTicker from '../components/BreakingNewsTicker';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <BreakingNewsTicker />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
