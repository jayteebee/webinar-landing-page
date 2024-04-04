import React from 'react';

export const ContentComponent = ({
  WEBINAR_DESCRIPTION,
  WEBINAR_TITLE,
  HOST_IMAGE,
  HOST_NAME,
  HOST_TITLE
}) => {
    return (
        <div className="flex justify-center mx-auto max-w-screen-md">
            <div className="p-6 bg-white bg-opacity-75 shadow-lg rounded-lg m-4 min-h-[75vh] min-w-[30vw] overflow-hidden">
                {/* Intro Banner Content */}
                <div className="text-black mb-8">
                    <div className="container mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{WEBINAR_TITLE}</h1>
                        <div className="flex items-center mb-4">
                            <div className="flex-shrink-0">
                                <img src={HOST_IMAGE.src} alt={HOST_IMAGE.alt}  className="rounded-full border-4 border-white shadow-lg w-32 h-32" />
                            </div>
                            <div className="ml-4">
                                <div className="text-lg font-bold">{HOST_NAME}</div>
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
