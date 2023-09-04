import React from "react";
import Projects from "../routes/Projects";
import AlphabeticBlock from "../components/AlphabeticBlock";
import Intro from "../components/Intro";
import Contact from "./Contact";
import Footer from "./Footer";

const Resume = () => {
  return (
    <div className="container mx-auto grid max-w-6xl grid-cols-1 py-12">
      <AlphabeticBlock
        title={["About /", "Projects /", "Contact /"]}
      ></AlphabeticBlock>
    </div>
  );
};

export default Resume;
