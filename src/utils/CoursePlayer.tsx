import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer = ({ videoUrl }: Props) => {
  const [videoData, setVideoData] = useState({});
  useEffect(() => {
    axios
      .post(`http://localhost:8000/api/v1/getVdoChiherOTP`, {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data.data);
      });
  }, [videoUrl]);

  return (
    <div
      style={{ paddingTop: "56.25%", position: "relative", overflow: "hidden", width:"100%" }}
    >
      {videoData && (
        <iframe
          src={`${videoData}`}
          style={{
            border: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default CoursePlayer;
