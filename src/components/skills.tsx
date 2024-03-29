import { useState } from "react";
import htmlIcon from "../assets/skills/html.svg";
import cssIcon from "../assets/skills/css.svg";
import jsIcon from "../assets/skills/javascript.svg";
import reactIcon from "../assets/skills/react.svg";
import vueIcon from "../assets/skills/vue.svg";
import tailwindIcon from "../assets/skills/tailwind.svg";
import pythonIcon from "../assets/skills/python.svg";

const skillIcons = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  React: reactIcon,
  Vue: vueIcon,
  Tailwind: tailwindIcon,
  Python: pythonIcon,
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="mt-30 overflow-visible relative">
      {" "}
      <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 rounded-md mb-4 p-6">
        <h2 className="text-3xl font-semibold text-white">Skills Dashboard</h2>
        <h3 className="text-sm pt-2">
          This is a simple dashboard with graphs that show my programming skills
          level, you can hover on the skills to see their level.
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {Object.entries({
            HTML: 100,
            CSS: 80,
            JavaScript: 95,
            React: 80,
            Vue: 40,
            Tailwind: 70,
            Python: 90,
          }).map(([skill, value]) => {
            const iconUrl = skillIcons[skill as keyof typeof skillIcons];
            if (!iconUrl) {
              console.error(`Missing icon for skill ${skill}`);
              return null;
            }
            const radius = 40;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset =
              circumference - (value / 100) * circumference;

            return (
              <div
                key={skill}
                className="flex flex-col items-center relative"
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <img src={iconUrl} alt={skill} className="w-16 h-16" />
                {hoveredSkill === skill && (
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 p-4 rounded-md shadow-lg z-50">
                    {" "}
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      className="transform -rotate-90 mb-2"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#4A5568"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke="#68D391"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={
                          strokeDashoffset === undefined ? 0 : strokeDashoffset
                        }
                      />
                    </svg>
                    <p className="text-lg font-semibold text-white">
                      {value}% - {skill}
                    </p>
                    <p className="text-sm">
                      {value >= 70 ? (
                        <span className="text-green-500">Proficient</span>
                      ) : value >= 50 ? (
                        <span className="text-yellow-500">Intermediate</span>
                      ) : (
                        <span className="text-red-500">Beginner</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
