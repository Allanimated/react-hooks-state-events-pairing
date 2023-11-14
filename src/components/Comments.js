import React, { useState } from "react";

function Comments({ comments }) {
  const [commentDisplay, setCommentDisplay] = useState(true);

  function toggleComments(e) {
    setCommentDisplay((commentDisplay) => !commentDisplay);
  }

  if (!commentDisplay) {
    return (
      <div>
        <button onClick={toggleComments}>Show Comments</button>
        <hr />
      </div>
    );
  }
  return (
    <div>
      <button onClick={toggleComments}>Hide Comments</button>
      <hr />
      <h3>{comments.length} comments</h3>
      {comments.map((comment) => (
        <>
          <p>
            <strong>{comment.user}</strong>
          </p>
          <p>{comment.comment}</p>
        </>
      ))}
    </div>
  );
}

export default Comments;
