import LinkedInIcon from "../assets/footer/linkedin.svg";
import GithubIcon from "../assets/footer/github.svg";
import BehanceIcon from "../assets/footer/behance.svg";
import FigmaIcon from "../assets/footer/figma.svg";
import FacebookIcon from "../assets/footer/facebook.svg";

const Footer = () => (
  <footer className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 rounded-md mt-4">
    <p className="text-sm text-center">
      Made with 💙 by{" "}
      <a className="hover:underline" href="https://github.com/soutoux">
        Magal Dev
      </a>
    </p>
    <div className="flex flex-row justify-center my-3">
      <a
        href="https://www.linkedin.com/in/zeca-magalhães-9a67621a5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={LinkedInIcon}
          alt="Linkedin"
          className="h-8 w-8 mx-2 cursor-pointer"
        />
      </a>
      <a
        href="https://github.com/soutoux"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={GithubIcon}
          alt="Github"
          className="h-8 w-8 mx-2 cursor-pointer"
        />
      </a>
      <a
        href="https://www.behance.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={BehanceIcon}
          alt="Behance"
          className="h-8 w-8 mx-2 cursor-pointer"
        />
      </a>
      <a
        href="https://www.figma.com/@"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={FigmaIcon}
          alt="Figma"
          className="h-8 w-8 mx-2 cursor-pointer"
        />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={FacebookIcon}
          alt="Facebook"
          className="h-8 w-8 mx-2 cursor-pointer"
        />
      </a>
    </div>
    <p className="text-sm text-center">All rights reserved &copy; 2024</p>
  </footer>
);

export default Footer;
