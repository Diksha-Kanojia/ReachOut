import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AssessmentSection from './Assessment';
import AssessmentFull from './AssessmentFull';
import Example from './Blogs';
import Chatbot from './Chatbot';
import Footer from './Footer';
import Galaxy from './Galaxy';
import CrisisHelpline from './Helplines';
import HeroSection from './Hero';
import Navbar from './Navbar';
import EducationalResources from './Resources';
import MentalHealthResources from './ResourcesFull';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <div id="hero" className="relative ">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Galaxy />
          <div >
            <HeroSection />
          </div>
        </div>
      </div>
      <div id="helplines">
        <CrisisHelpline />
      </div>
      <div id="resources">
        <EducationalResources />
      </div>
      <div id="assessment">
        <AssessmentSection />
      </div>
      <Example />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment-full" element={<AssessmentFull />} />
        <Route path="/resources-full" element={<MentalHealthResources />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;