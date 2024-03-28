import React from 'react';

export const ContentComponent = ({ WEBINAR_DESCRIPTION }) => {
    return (
        <div className="flex justify-center mx-auto max-w-screen-md">
            <div className="p-6 bg-white bg-opacity-75 shadow-lg rounded-lg m-4">
                <p className="text-gray-800 text-lg leading-relaxed">
                    {WEBINAR_DESCRIPTION}
                </p>
            </div>
        </div>
    );
};



// remove background
// use text from tvr
// add images from tvr site