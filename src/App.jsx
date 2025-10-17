// App.jsx
import React from 'react';
import Header from './Header/Header.jsx'; // Adjust path if needed, assuming Header.jsx is in the same directory
import Hero from './Hero/Hero.jsx';
import Footer from './Footer/Footer.jsx'
import Body from './Body/Body.jsx'
import ProjectDetails from './ProjectDetails/ProjectDetails.jsx';
import ProjectLocation from './Location/ProjectLocation.jsx';
import Membership from './Membership/Membership.jsx';
import ROI from './ROI/ROI.jsx'
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Body />
	  <ROI />
      <ProjectDetails />
  
      <ProjectLocation /> 
    
      <Membership />
 
      <Footer />
      
    </>
  );
}

export default App;