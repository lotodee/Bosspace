import React from "react";

const ImageWrapper = ({ src, alt, width, height, className = "" ,name ,icon}) => {
  return (
    <div className={`relative flex flex-col gap-1 items-center  ${className}`} style={{ width, height }}>
      {!icon ? 
      (  <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }} // This ensures the image fills the container
      /> ) : (
          <>
          {icon}
          </>
          
      )
    }
     
   
      <p className="text-[10px] text-custom_blue text-nowrap">{name}</p>

    </div>
  );
};

export default ImageWrapper;
