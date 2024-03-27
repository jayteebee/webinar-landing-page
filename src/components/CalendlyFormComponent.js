import React from 'react';
import { InlineWidget } from 'react-calendly';

export const CalendlyFormComponent = ({ CALENDLY_LINK }) => {
  return (
    <div className="lg:w-1/2 p-4 ">
      <InlineWidget
        styles={{
          height: "900px",
        }}
        url={CALENDLY_LINK}
        prefill={{}}
        pageSettings={{}}
        utm={{}}
      />
    </div>
  );
};
