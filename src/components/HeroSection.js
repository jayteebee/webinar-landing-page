// src/components/HeroSection.js
export const HeroSection = ({ title, subtitle, speakerName, speakerRole, speakerImage }) => {
    return (
      <div className="bg-black-800 text-white p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-6">{subtitle}</p>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={speakerImage} alt={speakerName} className="rounded-full border-4 border-white shadow-lg w-32 h-32" />
            </div>
            <div className="ml-4">
              <div className="text-lg font-bold">{speakerName}</div>
              <div className="text-sm">{speakerRole}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  