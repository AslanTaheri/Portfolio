import { useState, useEffect, useRef } from "react";
import "./LineNumberingText.css"; // You can create a CSS file for styling

const LineNumberingText = ({ text }) => {
  const [numLines, setNumLines] = useState(1);
  const codeContainerRef = useRef(null);

  useEffect(() => {
    const updateNumLines = () => {
      const lineHeight = 20; // You can adjust this based on your design
      const windowHeight = window.innerHeight;
      const newNumLines = Math.floor(windowHeight / lineHeight);
      setNumLines(newNumLines);
    };

    // Initial setup
    updateNumLines();

    // Attach the window resize listener
    window.addEventListener("resize", updateNumLines);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("resize", updateNumLines);
    };
  }, []);

  const lines = Array.from({ length: numLines }, (_, index) => index + 1);

  return (
    <div className="line-numbering-text">
      <div className="line-numbers">
        {lines.map((lineNumber) => (
          <div key={lineNumber} className="line-number">
            {lineNumber}
          </div>
        ))}
      </div>
      <div className="text-content">
        {text.split("\n").map((line, index) => (
          <div key={index} className="text-line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LineNumberingText;
