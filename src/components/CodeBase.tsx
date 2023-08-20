import { useState, useEffect, useRef } from "react";
import styles from "./CodeBlock.module.css";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const CodeBase = (props) => {
  const codeContainerRef = useRef(null);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      const lineHeight = 20; // Value based on CSS
      const containerHeight = codeContainerRef.current.clientHeight;
      console.log(containerHeight);
      const calculatedLineCount = Math.floor(containerHeight / lineHeight);
      setLineCount(calculatedLineCount);
    }, 250);
    debouncedHandleResize();
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <div className={styles["text-container"]}>
      <div className={styles["line-numbers"]}>
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index + 1} className={`${styles["line-number"]}`}>
            {index + 1}
          </div>
        ))}
      </div>
      <div className={styles["text-content"]} ref={codeContainerRef}>
        {props.children}
      </div>
    </div>
  );
};

export default CodeBase;
