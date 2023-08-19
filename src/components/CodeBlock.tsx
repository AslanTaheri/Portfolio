import { useState, useEffect, useRef } from "react";
import styles from "./CodeBlock.module.css";

const CodeBlock = ({ code }) => {
  //   const lines = code.split("\n");
  //   console.log(lines);
  const codeContainerRef = useRef(null);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const calculateLineCount = () => {
      const lineHeight = 20; // Adjust this value based on your CSS
      const containerHeight = codeContainerRef.current.clientHeight;
      console.log(containerHeight);
      const calculatedLineCount = Math.floor(containerHeight / lineHeight);
      setLineCount(calculatedLineCount);
    };

    calculateLineCount();
    const handleResize = () => {
      calculateLineCount();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles["code-container"]} ref={codeContainerRef}>
      <div className={styles["line-numbers"]}>
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index + 1} className={styles["line-number"]}>
            {index + 1}
          </div>
        ))}
      </div>
      {/* <pre className={styles["code"]}>
        {lines.map((line, index) => (
          <div key={index} className={styles["code-line"]}>
            {line}
          </div>
        ))}
      </pre> */}
      <pre className={styles["code"]}>
        <div className={styles["code-line"]}>{code}</div>
        <hr />
      </pre>
    </div>
  );
};

export default CodeBlock;
