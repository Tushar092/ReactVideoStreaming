// HomeScreen.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const HomeScreen = ({ defaultVideoUrl }) => {
  const [vURL, set_vURL] = useState(defaultVideoUrl);
  const [errorMsg, set_ErrorMsg] = useState("");
  const [vReady, set_vReady] = useState(true);
  useEffect(() => {
    set_ErrorMsg("");
  }, [defaultVideoUrl]);

  const vPlayFn = () => {
    if (validateFn(vURL)) {
      set_ErrorMsg("");
      set_vReady(true);
    } else {
      set_ErrorMsg("Please enter a valid video URL");
    }
  };
  const validateFn = (url) => {
    return url.trim() !== "" && vFormatFn(url);
  };
  const vFormatFn = (url) => {
    const vFormats = ["mp4", "webm", "ogg", "ogv", "avi", "mov", "flv", "mkv"];
    const ext = url.split(".").pop();
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return true;
    }
    return vFormats.includes(ext.toLowerCase());
  };
  const checkYTFn = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };
  const getYTFn = (url) => {
    const match = url.match(/[?&]v=([^?&]+)/);
    return match ? match[1] : "";
  };
  const inputFn = (e) => {
    set_vURL(e.target.value);
    set_vReady(false);
  };
  return (
    <div className="container">
      <h1 className="heading">GeeksforGeeks Video Streaming App</h1>
      <div className="input-container">
        <input
          className="input"
          placeholder="Enter Video URL"
          onChange={inputFn}
          value={vURL}
        />
        <button className="button" onClick={vPlayFn}>
          Play Video
        </button>
      </div>
      {errorMsg && <p className="error-message">{errorMsg}</p>}
      <div className="video-preview">
        {vReady && (
          <>
            {checkYTFn(vURL) ? (
              <iframe
                title="YouTube Video Preview"
                width="100%"
                height="315"
                src={`
                                https://www.youtube.com/embed/${getYTFn(vURL)}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <video controls width="100%" height="315">
                <source src={vURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default HomeScreen;
