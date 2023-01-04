/* eslint-disable */
import React from "react";

function Clock(props) {
  return (
    <div>
      <h5>접속시각 : {new Date().toLocaleTimeString()}</h5>
    </div>
  );
}
export default Clock;
