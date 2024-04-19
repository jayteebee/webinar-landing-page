// import React, { useEffect, useState } from 'react';
// import { InlineWidget } from 'react-calendly';

// export const CalendlyFormComponent = ({ CALENDLY_LINK }) => {
//   const [key, setKey] = useState(0);

//   // Whenever CALENDLY_LINK changes, update the key to force a re-render of the iframe
//   useEffect(() => {
//     setKey(prevKey => prevKey + 1);
//   }, [CALENDLY_LINK]);

//   return (
//     <div className="h-full">
//       <div className="overflow-y-auto shadow-lg rounded-lg h-[85vh] min-w-[30vw]"> 
//         <iframe 
//           key={key} // Add key prop to force iframe reload when CALENDLY_LINK changes
//           title="Webinar Sign Up Form"
//           src={CALENDLY_LINK} 
//           width="100%" 
//           height="100%" 

//         >
//           Loading…
//         </iframe>
//       </div>
//     </div>
//   );
// };

import React, { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';

export const CalendlyFormComponent = ({ CALENDLY_LINK }) => {
  const [key, setKey] = useState(0);

  // Whenever CALENDLY_LINK changes, update the key to force a re-render of the iframe
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [CALENDLY_LINK]);

  return (
    <div className="p-4 h-full w-full">
      <div className="overflow-y-auto shadow-lg rounded-lg h-[85vh] min-w-[30vw]"> 
        <iframe 
          key={key} // Add key prop to force iframe reload when CALENDLY_LINK changes
          title="Webinar Sign Up Form"
          src={CALENDLY_LINK} 
          width="100%" 
          height="100%" 

        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};