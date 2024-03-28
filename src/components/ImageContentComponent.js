import React from 'react';

export const ImageContentComponent = ({ WEBINAR_IMAGE }) => {
    console.log(WEBINAR_IMAGE)
    return (
            <div className="flex justify-center mx-auto max-w-screen-md">
                <div className="p-6 bg-white bg-opacity-75 shadow-lg rounded-lg m-4">
                    <img src={WEBINAR_IMAGE.src} alt={WEBINAR_IMAGE.alt}  />
                </div>
            </div>

    );
};
