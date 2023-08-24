import React from "react";

const AlphabeticBlock = ({ children, title }) => {
  const numberedChildren = React.Children.map(children, (child, index) => {
    // Convert index to corresponding letter
    const childLetter = String.fromCharCode(65 + index);

    return (
      <div key={index} className="relative flex">
        <p className="relative left-6 text-gray-500 font-semibold">
          {childLetter}.
        </p>
        <p className="absolute left-11 text-gray-600 font-bold">
          {title[index]}
        </p>

        <div className="flex-grow relative ml-2">
          <div className="absolute top-8 bottom-2 left-4 border-l border-gray-400" />
          <div className="ml-2">{child}</div>
        </div>
      </div>
    );
  });

  return <div className="">{numberedChildren}</div>;
};

export default AlphabeticBlock;
