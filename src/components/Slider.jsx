import React from 'react';

const Slider = ({ children }) => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar  space-x-4 p-4">
      {children}
    </div>
  );
};

export default Slider;
