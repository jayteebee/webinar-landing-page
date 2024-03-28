import "../styles/introBanner.css"

export const IntroBannerComponent = ({ WEBINAR_TITLE, HOST_IMAGE, HOST_NAME, HOST_TITLE }) => {
  return (
    <div className="text-white p-8 border-fade">
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{WEBINAR_TITLE}</h1>
      <div className="flex items-center">
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
  );
};