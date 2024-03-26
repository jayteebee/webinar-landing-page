import { InlineWidget } from "react-calendly";
import video from "../video/baloon.mp4";

// src/components/FormSection.js
export const FormSection = () => {
  return (
    <div className="container mx-auto flex">

      <div className="w-full sm:w-1/2 z-[-10] ">
          <p className="absolute z-10 text-white">HELLO</p>
  
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="relative w-full sm:w-1/2">
        {/* Video background */}

        {/* Calendly form overlay */}
        <div className="relative shadow-lg p-8 ">
          <InlineWidget
            styles={{
              height: "900px",
            }}
            url="https://calendly.com/jethro-z-nh/webinar"
            prefill={{}}
            pageSettings={{}}
            utm={{}}
          />
        </div>
      </div>
    </div>
  );
};
