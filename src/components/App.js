import video from "../data/video.js";
import Comments from "./Comments.js";
import Description from "./Description.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video videoUrl={video.embedUrl} title={video.title} />
      <Description video={video} />
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
