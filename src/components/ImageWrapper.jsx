import React from "react";

const ImageWrapper = ({ src, alt, width, height, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }} // This ensures the image fills the container
      />
    </div>
  );
};

export default ImageWrapper;
