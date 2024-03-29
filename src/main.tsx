import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Works from "./components/works.tsx";
import Skills from "./components/skills.tsx";
import About from "./components/about.tsx";
import Contact from "./components/contact.tsx";
import Footer from "./components/footer.tsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Works />
    <Skills />
    <About />
    <Contact />
    <Footer />
  </React.StrictMode>
);
