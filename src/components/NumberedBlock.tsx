import React, { useState, useEffect, useRef } from "react";

const NumberedBlock = ({ children }) => {
  const codeContainerRef = useRef(null);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const lineHeight = 24; // Value based on CSS
      const containerHeight = codeContainerRef.current.clientHeight;
      const calculatedLineCount = Math.floor(containerHeight / lineHeight);
      setLineCount(calculatedLineCount);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid grid-cols-[10px_1fr] gap-x-2 items-start mx-1 my-4">
      <div className="items-end mt-1 space-y-2">
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index + 1} className=" text-xs text-slate-500">
            {index + 1}
          </div>
        ))}
      </div>
      <div className="pl-2.5 border-slate-500 border-l" ref={codeContainerRef}>
        {children}
      </div>
    </div>
  );
};

export default NumberedBlock;
