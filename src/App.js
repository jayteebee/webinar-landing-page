// original

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HeaderComponent } from "./components/HeaderComponent";

import { ContentComponent } from "./components/ContentComponent";
import { CalendlyFormComponent } from "./components/CalendlyFormComponent";
import { ImageContentComponent } from "./components/ImageContentComponent";
import { CONTENT } from "./content/content.js";

import { IntroSelection } from "./components/IntroSelection.js";
import HighSpeedHomePage from "./HSComponents/HighSpeedHomePage.jsx";
import WebinarThankYou from "./components/WebinarThankYou.js";

const HomePage = () => {
  const [webinar, setWebinar] = useState("");
  const content = CONTENT.find((item) => item.id === webinar) || CONTENT[0];

  return (
    <div className="relative min-h-screen min-w-full bg-gray-100">
      <div className="relative z-10">
        <HeaderComponent />
        <IntroSelection setWebinar={setWebinar} />
        <div className="flex flex-col lg:flex-row justify-center items-stretch mx-auto px-4 lg:px-8">
          <div className="flex flex-1 justify-center min-h-[400px]">
            <ContentComponent
              id={content.id}
              WEBINAR_DESCRIPTION={content.WEBINAR_DESCRIPTION}
              WEBINAR_TITLE={content.WEBINAR_TITLE}
              HOST_IMAGE={content.HOST_IMAGE}
              HOST_NAME={content.HOST_NAME}
              HOST_TITLE={content.HOST_TITLE}
              style={{ flex: "1 0 50%", maxWidth: "50%" }}
            />
          </div>
          <div className="flex flex-1 justify-center mt-4 lg:mt-0 min-h-[400px]">
            <CalendlyFormComponent
              CALENDLY_LINK={content.CALENDLY_LINK}
              style={{ flex: "1 0 50%", maxWidth: "50%" }}
            />
          </div>
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
        <Route path="/HS" element={<HighSpeedHomePage />} />
        <Route path="/webinar-thank-you" element={<WebinarThankYou />} /> {/* New Thank You Route */}
      </Routes>
    </Router>
  );
};

export default App;


