import React from 'react';
import { InlineWidget } from 'react-calendly';

export const CalendlyFormComponent = ({ CALENDLY_LINK }) => {
  return (
    <div className="p-4">
    <div className="overflow-y-auto shadow-lg rounded-lg h-[75vh] min-w-[30vw]"> 
      <iframe 
        title="Webinar Sign Up Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSe5tImbf5MYxJUmATYHOzgaVrirWAnF9-pqxkVXaR50WxH_Xg/viewform?embedded=true" 
        width="100%" 
        height="100%" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  </div>
      );
    };
    
    // <InlineWidget
    //     styles={{
    //       height: '100%', 
    //       width: '100%', 
    //     }}
    //     url={CALENDLY_LINK}
    //     prefill={{}}
    //     pageSettings={{}}
    //     utm={{}}
    //   />
