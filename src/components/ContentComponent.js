

import React from 'react';

export const ContentComponent = ({
  id, 
  WEBINAR_DESCRIPTION,
  WEBINAR_TITLE,
  HOST_IMAGE,
  HOST_NAME,
  HOST_TITLE
}) => {

    const customImageStyle = id === "seven" ? "object-contain h-32 w-32" : "rounded-full border-4 border-white shadow-lg w-32 h-32";

    return (
        <div className="flex justify-center mx-auto max-w-screen-md " style={{minHeight: "75vh"}}>
            <div className="p-6 bg-white bg-opacity-75 shadow-lg rounded-lg m-4 min-h-[75vh] min-w-[30vw] overflow-hidden bg-gray-100">
                {/* Intro Banner Content */}
                <div className="text-black mb-8">
                    <div className="container mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4"
                        style={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                          }}
                        >{WEBINAR_TITLE}</h1>
                        <h2
                        style={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                          }}
                        >Taking place on the 29th May - 11:00am to 12:00pm</h2>
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0">
                                {/* Apply conditional styling based on the content's id */}
                                <img src={HOST_IMAGE.src} alt={HOST_IMAGE.alt} className={customImageStyle} />
                            </div>
                            <div className="ml-4" >
                                <div className="text-lg font-bold"
                                style={{
                                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                                  }}
                                >{HOST_NAME}</div>
                                <div className="text-sm">{HOST_TITLE}</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Webinar Description */}
                <p className="text-gray-800 text-lg leading-relaxed">
                    {WEBINAR_DESCRIPTION}
                </p>
            </div>
        </div>
    );
};