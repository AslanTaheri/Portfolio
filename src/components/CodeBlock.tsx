import { useState, useEffect, useRef } from "react";

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
      const lineHeight = 24; // Value based on CSS
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
    <div className="flex items-start">
      <div className="flex flex-col items-end px-2">
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index + 1} className="my-1 text-xs text-slate-500">
            {index + 1}
          </div>
        ))}
      </div>
      <div className="pl-2.5 border-slate-500 border-l" ref={codeContainerRef}>
        {props.children}
      </div>
    </div>
  );
};

export default CodeBase;
