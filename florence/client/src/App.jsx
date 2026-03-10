import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
    const [showIntro, setShowIntro] = useState(
        !sessionStorage.getItem('hasSeenIntro')
    );

    const handleIntroComplete = () => {
        setShowIntro(false);
    };

    return (
        <Router>
            {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
            <div className="font-sans">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
