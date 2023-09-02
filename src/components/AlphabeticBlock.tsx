import React from "react";

const AlphabeticBlock = ({ children, title }) => {
  const numberedChildren = React.Children.map(children, (child, index) => {
    // Convert index to corresponding letter
    const childLetter = String.fromCharCode(65 + index);

    return (
      <div key={index} className="relative flex">
        <p className="relative left-6 font-semibold text-gray-600">
          {childLetter}.
        </p>
        <p className="absolute left-11 font-bold">{title[index]}</p>

        <div className="relative ml-2 flex-grow">
          <div className="absolute bottom-2 left-4 top-8 border-l border-gray-400" />
          <div className="ml-2">{child}</div>
        </div>
      </div>
    );
  });

  return <div className="">{numberedChildren}</div>;
};

export default AlphabeticBlock;
