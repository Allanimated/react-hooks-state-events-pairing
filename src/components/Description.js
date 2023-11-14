import { useState } from "react";
import React from "react";

function Description({ video }) {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  //handle upvotes
  function handleUpvotes(e) {
    setUpvotes((upvotes) => upvotes + 1);
  }

  //handle downvotes
  function handleDownvotes(e) {
    setDownvotes((downvotes) => downvotes - 1);
  }

  return (
    <div>
      <h1>{video.title}</h1>
      <p>
        {video.views} views | uploaded {video.createdAt}
      </p>
      <div>
        <button onClick={handleUpvotes}>{upvotes}👍</button>
        <button onClick={handleDownvotes}>{downvotes}👎</button>
      </div>
    </div>
  );
}

export default Description;
