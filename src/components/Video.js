import React from "react";

function Video({ videoUrl, title }) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
    </div>
  );
}

export default Video;
