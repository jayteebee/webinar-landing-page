// import "../styles/introBanner.css"

// export const IntroSelection = ({setWebinar}) => {

//     const shortenedWebinarTitles = [
//       "Home",
//       "Cooled vs Uncooled",
//         "PC Circuit board",
//         "High-Speed Imaging ",
//         "Outdoor Imaging ",
//         "The Hidden Gems",
//         "Sync and Trigger",
//       ];
      
//   return (
//     <div className="text-black p-8 border-fade">
//     <div className="container mx-auto">
//       <h1 className="text-3xl md:text-4xl font-bold mb-4"
//       style={{
//         textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
//       }}
//       >Webinar Series</h1>
//       <div className="flex items-center">
//         {shortenedWebinarTitles.map((name, index) => (
//             <div key={index} className="ml-4">
//       <button 
//       className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100 focus:outline-none focus:shadow-outline"
//       style={{
//         textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
//       }}
//       onClick={() => setWebinar(name)}
//       >
//       {name}
//     </button>
//     </div>
//         ))}
//       </div>
//     </div>
//   </div>
//   );
// };

import "../styles/introBanner.css";

export const IntroSelection = ({ setWebinar }) => {
  const shortenedWebinarTitles = [
    // "Home",
    "Part One: Introduction",
    // "PC Circuit board",
    // "High-Speed Imaging",
    // "Outdoor Imaging",
    // "The Hidden Gems",
    // "Sync and Trigger",
  ];

  return (
    <div className="text-black p-8 border-fade">
      <div className="container mx-auto">
        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Webinar Registration
        </h1>
        <div className="flex overflow-x-auto space-x-2">
          {shortenedWebinarTitles.map((name, index) => (
            <div key={index} className="flex-shrink-0">
              <button
                className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow hover:bg-gray-100 focus:outline-none focus:shadow-outline"
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
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
