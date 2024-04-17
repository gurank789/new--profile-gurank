import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["Front-end developer", "MERN Stack Developer", "Entrepreneure", "Chess Enthusiast", "Traveling", "Swimming"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50
        }}
      />
    </>
  );
};
