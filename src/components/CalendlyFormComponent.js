import React from 'react';
import { InlineWidget } from 'react-calendly';

export const CalendlyFormComponent = ({ CALENDLY_LINK }) => {
  return (
    <div className="lg:w-1/2 p-4 ">
      <InlineWidget
        styles={{
          height: '60vh',
        }}
        url={CALENDLY_LINK}
        prefill={{}}
        pageSettings={{}}
        utm={{}}
      />
    </div>
  );
};
