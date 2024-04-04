import "../styles/introBanner.css"

export const IntroSelection = ({setWebinar}) => {

    const shortenedWebinarTitles = [
      "Home",
      "Cooled vs Uncooled",
        "PC Circuit board",
        "High-Speed Imaging ",
        "Outdoor Imaging ",
        "The Hidden Gems",
        "Sync and Trigger",
      ];
      
  return (
    <div className="text-black p-8 border-fade">
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Webinar Series</h1>
      <div className="flex items-center">
        {shortenedWebinarTitles.map((name, index) => (
            <div key={index} className="ml-4">
      <button 
      className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100 focus:outline-none focus:shadow-outline"
      onClick={() => setWebinar(name)}
      >
      {name}
    </button>
    </div>
        ))}
      </div>
    </div>
  </div>
  );
};