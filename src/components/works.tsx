const Works = () => {
  const images = Array.from(
    { length: 3 },
    (_, i) => `https://via.placeholder.com/500x300.png?text=Image+${i + 1}`
  );

  return (
    <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 rounded-md mb-4">
      <h2 className="text-3xl font-semibold text-start">Selected Works</h2>
      <h3 className="text-sm pt-2">
        Here you can see my recent works, a small selection of projects I've
        worked on recently, with links to GitHub and the site if applicable.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mt-12">
        {images.map((image, i) => (
          <div
            key={i}
            className="bg-gray-700 shadow-lg shadow-gray-800 rounded-md overflow-hidden relative group"
          >
            <img src={image} className="w-full" alt={`Work ${i + 1}`} />
            <a
              href="#"
              className="bg-indigo-600 px-4 py-2 text-center text-white absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
