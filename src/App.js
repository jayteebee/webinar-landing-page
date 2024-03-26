
// src/App.js
import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FormSection } from './components/FormSection';
import matthew from "./images/matthew.jpeg";
import andy from "./images/andy.jpeg";


function App() {
  // Dynamic content based on the URL path will be implemented here
  return (
    <div className="App">
      <Navbar />
      <HeroSection
        title="High Speed Imaging - X Series HS / Visible"
        subtitle="Webinar Description"
        speakerName="Matthew"
        speakerRole="Director, Thermal Vision Research"
        speakerImage={matthew} // Update with the correct path
      />
      <FormSection />
    </div>
  );
}

export default App;
