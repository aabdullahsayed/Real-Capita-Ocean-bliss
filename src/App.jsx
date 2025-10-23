// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

// Sections / Pages
import Hero from './Hero/Hero.jsx';
import Body from './Body/Body.jsx';
import ProjectDetails from './ProjectDetails/ProjectDetails.jsx';
import ProjectLocation from './Location/ProjectLocation.jsx';
import Membership from './Membership/Membership.jsx';
import ROI from './ROI/ROI.jsx';
import FloatingBenefits from './FloatingBenifits/FloatingBenifits.jsx';
import WhoWeAreSection from './AboutUs/WhoWeAreSection.jsx';
import Game from './Game/Game.jsx';
import RoomsAndSuites from './Room/RoomsAndSuites.jsx';
import Contact from './contact/Contact.jsx';

// Main App Component
function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              
        
              <ProjectLocation />
        
              
            </>
          }
        />

        {/* 🧭 About Us */}
        <Route
          path="/about"
          element={
            <>
              <WhoWeAreSection />
            </>
          }
        />

        {/* 💎 ROI Section */}
        <Route
          path="/investment"
          element={
            <>
              <ROI />
              <Membership/>
            </>
          }
        />

        {/* 🏢 Project Details */}
        <Route
          path="/features"
          element={
            <>
            <Body />
              <ProjectDetails />
            </>
          }
        />

        {/* 📍 Project Location */}
        <Route
          path="/project-location"
          element={
            <>
              <ProjectLocation />
            </>
          }
        />

        {/* 👑 Membership */}
        <Route
          path="/rooms"
          element={
            <>
              <RoomsAndSuites />
            </>
          }
        />

        {/* 🎮 Game Page */}
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
