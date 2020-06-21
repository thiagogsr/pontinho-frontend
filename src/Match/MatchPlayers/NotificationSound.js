import React from "react";
import sound from "./your-time.mp3";

export default () => (
  <audio autoPlay>
    <source src={sound} type="audio/mpeg" />
  </audio>
);
