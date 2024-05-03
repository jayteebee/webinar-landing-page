// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { HeaderComponent } from "./components/HeaderComponent";

// import { ContentComponent } from "./components/ContentComponent";
// import { CalendlyFormComponent } from "./components/CalendlyFormComponent";
// import { ImageContentComponent } from "./components/ImageContentComponent";
// import { CONTENT } from "./content/content.js";

// import { IntroSelection } from "./components/IntroSelection.js";

// const HomePage = () => {
//   const [webinar, setWebinar] = useState("");
//   const content = CONTENT.find((item) => item.id === webinar) || CONTENT[6];

//   return (
//     <div className="relative min-h-screen min-w-full">
//       <div className="relative z-10">
//         <HeaderComponent />
//         <IntroSelection setWebinar={setWebinar} />
//         <div className="flex flex-col lg:flex-row justify-between">
//           <ContentComponent
//             id={content.id}
//             WEBINAR_DESCRIPTION={content.WEBINAR_DESCRIPTION}
//             WEBINAR_TITLE={content.WEBINAR_TITLE}
//             HOST_IMAGE={content.HOST_IMAGE}
//             HOST_NAME={content.HOST_NAME}
//             HOST_TITLE={content.HOST_TITLE}
//           />
//           <CalendlyFormComponent CALENDLY_LINK={content.CALENDLY_LINK} />
//         {/**
//         <ImageContentComponent WEBINAR_IMAGE={content.WEBINAR_IMAGE} />
//       */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// original

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HeaderComponent } from "./components/HeaderComponent";

import { ContentComponent } from "./components/ContentComponent";
import { CalendlyFormComponent } from "./components/CalendlyFormComponent";
import { ImageContentComponent } from "./components/ImageContentComponent";
import { CONTENT } from "./content/content.js";

import { IntroSelection } from "./components/IntroSelection.js";

const HomePage = () => {
  const [webinar, setWebinar] = useState("");
  const content = CONTENT.find((item) => item.id === webinar) || CONTENT[0];

  return (
    <div className="relative min-h-screen min-w-full">
      <div className="relative z-10">
        <HeaderComponent />
        <IntroSelection setWebinar={setWebinar} />
        <div className="flex space-around flex-col lg:flex-row ">
          <ContentComponent
            id={content.id}
            WEBINAR_DESCRIPTION={content.WEBINAR_DESCRIPTION}
            WEBINAR_TITLE={content.WEBINAR_TITLE}
            HOST_IMAGE={content.HOST_IMAGE}
            HOST_NAME={content.HOST_NAME}
            HOST_TITLE={content.HOST_TITLE}
          />
          <CalendlyFormComponent CALENDLY_LINK={content.CALENDLY_LINK} />
          {/**
          <ImageContentComponent WEBINAR_IMAGE={content.WEBINAR_IMAGE} />
         */}
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
      </Routes>
    </Router>
  );
};

export default App;


