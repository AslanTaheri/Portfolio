import { useState, useEffect, useRef } from "react";

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
    <div className="mx-1 my-4 grid grid-cols-[10px_1fr] items-start gap-x-2">
      <div className="mt-1 items-end space-y-2">
        {Array.from({ length: lineCount }, (_, index) => (
          <div key={index + 1} className=" text-xs text-slate-500">
            {index + 1}
          </div>
        ))}
      </div>
      <div className="border-l border-slate-500 pl-2.5" ref={codeContainerRef}>
        {children}
      </div>
    </div>
  );
};

export default NumberedBlock;
