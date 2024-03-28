

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import video from "./video/baloon.mp4";
import { HeaderComponent } from './components/HeaderComponent';
import { IntroBannerComponent } from './components/IntroBannerComponent';
import { ContentComponent } from './components/ContentComponent';
import { CalendlyFormComponent } from './components/CalendlyFormComponent';
import { ImageContentComponent } from './components/ImageContentComponent';
import { CONTENT } from "./content/content.js";

const WebinarPage = () => {
  const { id } = useParams();
  const content = CONTENT.find(item => item.id === id) || CONTENT[0]; // Fallback to the first item if not found

console.log(content.WEBINAR_IMAGE)
  return (

    <div className="relative min-h-screen min-w-full">
      {/* <video autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative z-10">
        <HeaderComponent />
        <IntroBannerComponent {...content} />
        <div className="flex flex-col lg:flex-row justify-between">
        <ContentComponent WEBINAR_DESCRIPTION={content.WEBINAR_DESCRIPTION} />
        <ImageContentComponent WEBINAR_IMAGE={content.WEBINAR_IMAGE} />
        <CalendlyFormComponent CALENDLY_LINK={content.CALENDLY_LINK} />
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const { id } = useParams();
  const content = CONTENT.find(item => item.id === id) || CONTENT[0]; // Fallback to the first item if not found

console.log(content.WEBINAR_IMAGE)
  return (

    <div className="relative min-h-screen min-w-full">
      {/* <video autoPlay loop muted className="fixed top-0 left-0 w-full h-full object-cover z-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative z-10">
        <HeaderComponent />
        <IntroBannerComponent {...content} />
        <div className="flex flex-col lg:flex-row justify-between">
        <ContentComponent WEBINAR_DESCRIPTION={content.WEBINAR_DESCRIPTION} />
        <ImageContentComponent WEBINAR_IMAGE={content.WEBINAR_IMAGE} />
        <CalendlyFormComponent CALENDLY_LINK={content.CALENDLY_LINK} />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<WebinarPage />} />
      </Routes>
    </Router>
  );
};

export default App;

