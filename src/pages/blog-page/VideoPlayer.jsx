/* eslint-disable react/prop-types */
import React from "react";

const VideoPlayer = ({ videoUrl,width,height }) => {
  const renderVideo = () => {
    // Check if it's a YouTube video
    const isYouTube =
      videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

    if (isYouTube) {
      // Extract the video ID from the URL
      const videoId = videoUrl.match(
        /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
      );

      if (videoId) {
        // Create the embed URL for YouTube
        const embedUrl = `https://www.youtube.com/embed/${videoId[1]}`;
        return (
          <iframe
            width={width}
            height={height}
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      }
    }

    // For non-YouTube videos (use `<video>` tag)
    return (
      <video width="100%" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return <div className="video-player">{renderVideo()}</div>;
};

export default VideoPlayer;
