import React from "react";
import AgoraRTC from "agora-rtc-sdk";
import { useEffect } from "react";
import { useState } from "react";

const APP_ID = "a3753679809845cab8db5806709b50f0";

const TOKEN =
  "007eJxTYKjOKvT4XFITe856omBG2A8rTf6QZYe0rjY8t5Cz8Jj7oUGBIdHY3NTYzNzSwsDSwsQ0OTHJIiXJ1MLAzNzAMsnUIM1AiMkztSGQkUE6ipWRkQECQXxmhvKULAYGAILdGzM=";

const CHANNEL = "wdj";

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

const Videoroom = () => {
  const [user, setUsers] = useState([]);
  //   const handleUserJoined = () => {};
  //   const handleUserLeft = () => {};
  useEffect(() => {
    // client.on("user-published", handleUserJoined);
    // client.on("user-left", handleUserLeft);
    client
      .join(APP_ID, CHANNEL, TOKEN.null)
      .then((uid) =>
        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setUsers((previousUsers) => [...previousUsers, { uid, videoTrack }]);
        client.publish(tracks);
      });
  }, []);
  return (
    <div>
      Videoroom{" "}
      {user.map((user) => {
        <div key={user.uid}>{user.uid}</div>;
      })}
    </div>
  );
};

export default Videoroom;
