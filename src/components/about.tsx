const AboutMe = () => {
  return (
    <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 rounded-md mb-4">
      <h2 className="text-3xl font-semibold text-start">About Me</h2>
      <div className="flex flex-row items-center justify-between flex-wrap gap-3 pt-3">
        <div className="flex flex-row items-center">
          <div className="flex flex-row-reverse">
            <img
              className="imagem2 w-40 rounded-md border-2 border-gray-700 mx-auto"
              src="https://media.discordapp.net/attachments/852247434104274945/1223288643700133928/IMG_1144.PNG?ex=66194f54&is=6606da54&hm=f0a93635d3468b1fc80f4983bfe6f01cbd714e49d8b268e00aec3b9f40f7ca27&=&format=webp"
              alt="User Avatar"
              style={{ marginLeft: "2rem", marginRight: "1rem" }}
            />

            <div className="pt-4">
              <p className="text-base">
                Hello! I'm Zeca Magalhães, a Brazilian front-end developer and
                minimalist designer. I specialize in HTML, CSS, JavaScript, and
                frameworks like Tailwind, Bootstrap, Next.js, React, Vue, Nuxt,
                and TypeScript etc. Fluent in Portuguese, English, Spanish, and
                French, I bring a global perspective to my projects. I
                prioritize usability and accessibility in my designs, focusing
                on simplicity and organization. Outside of work, I'm passionate
                about football, military, and aviation, which keep me inspired.
                My goal is to create digital experiences that are not only
                visually appealing but also intuitive and accessible for
                everyone. Let's discuss how I can enhance your next project with
                creativity and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
