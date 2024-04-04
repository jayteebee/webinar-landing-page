import React from 'react';
import { InlineWidget } from 'react-calendly';

export const CalendlyFormComponent = ({ CALENDLY_LINK }) => {
  return (
    <div className=" p-4">
      <div className="overflow-hidden shadow-lg rounded-lg h-[75vh] min-w-[30vw]"> 
        <InlineWidget
          styles={{
            height: '100%', // Make the widget fill the container height
            width: '100%', // Make the widget fill the container width
          }}
          url={CALENDLY_LINK}
          prefill={{}}
          pageSettings={{}}
          utm={{}}
        />
      </div>
    </div>
  );
};
