import React from "react";
import Lounge from "./Lounge";
import Saloon from "./Saloon";

const MainRoom = (props) => (
  <div className="component">
    <h1>MainRoom</h1>
    <Lounge {...props} />
    <Saloon {...props} />
  </div>
);

export default MainRoom;
