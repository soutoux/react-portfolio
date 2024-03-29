const App = () => {
  return (
    <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 rounded-md mb-4">
      <div className="flex flex-row items-center justify-between flex-wrap gap-3 pt-3">
        <div className="flex flex-row items-center">
          <div
            className="relative w-24 rounded-full"
            onMouseOver={(e) =>
              e?.currentTarget?.lastElementChild?.setAttribute(
                "style",
                "display: flex; right: -140px; z-index: 1; max-width: 24rem; transition: all 0.2s ease-out;"
              )
            }
            onMouseLeave={(e) =>
              e?.currentTarget?.lastElementChild?.setAttribute(
                "style",
                "display: none; transition: all 0.2s ease-out;"
              )
            }
          >
            <img
              className="w-24 rounded-full"
              src="https://github.com/soutoux.png"
              alt="User Avatar"
            />

            <div className="absolute bg-gray-700 rounded-md p-4 w-max right-0 shadow-lg hidden">
              <ul>
                <li className="text-indigo-600 font-semibold">Full Name:</li>
                <li className="text-base">Zeca Magalhães Schubert Souto</li>
                <li className="text-indigo-600 font-semibold pt-2">
                  Location:
                </li>
                <li className="text-base">Piracicaba/SP - Brazil</li>
                <li className="text-indigo-600 font-semibold pt-2">Email:</li>
                <li className="text-base">
                  <a href="mailto:magaldevelopment@gmail.com">
                    magaldevelopment@gmail.com
                  </a>
                </li>
                <li className="text-indigo-600 font-semibold pt-2">
                  LinkedIn:
                </li>
                <li className="text-base">
                  <a
                    href="https://www.linkedin.com/in/zeca-magalhaes/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/zeca-magalhaes
                  </a>
                </li>
                <li className="text-indigo-600 font-semibold pt-2">Github:</li>
                <li className="text-base">
                  <a
                    href="https://github.com/soutoux"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/soutoux
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="ml-4 flex flex-col">
            <h3 className="font-semibold text-xl">Zeca Magalhães</h3>
            <h4 className="text-indigo-600 pt-1">Front-End Developer</h4>
          </div>
        </div>

        <div className="flex flex-row">
          <a
            className="text-white bg-indigo-600 rounded px-4 py-2 mr-4 transition-all hover:bg-indigo-700"
            href="https://github.com/soutoux/personal-website/blob/main/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
