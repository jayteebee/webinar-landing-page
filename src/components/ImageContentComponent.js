export const ImageContentComponent = ({ WEBINAR_IMAGE }) => {
    return (
        <div className="flex justify-center mx-auto max-w-screen-md">
            <div className="p-6 bg-white bg-opacity-75 shadow-lg rounded-lg m-4 h-[75vh] w-full overflow-hidden flex justify-center items-center">
                <img src={WEBINAR_IMAGE.src} alt={WEBINAR_IMAGE.alt} className="max-h-full max-w-full object-cover"  />
            </div>
        </div>
    );
};
