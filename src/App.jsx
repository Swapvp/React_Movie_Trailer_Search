import "./App.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

function App() {
  //Setting up the initial states using
  // react hook 'useState"
  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] = useState(
    "https://youtu.be/kQDd1AhGIHk?si=himtyEyo2_MtyD5S"
  );

  //A function to fetch the required URL
  // and storing it inside the
  // videoURL state variable
  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  return (
    <div className="App">
      <div className="search-box">
        <label>Search for any movies/shows: </label>
        <input
          type="text"
          onChange={(e) => {
            setVideo(e.target.value);
          }}
        />

        <button
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>
      <div className="player">
        // Using 'ReactPlayer' component to // display the video
        <ReactPlayer url={videoURL} controls={true} />
      </div>
    </div>
  );
}

export default App;
