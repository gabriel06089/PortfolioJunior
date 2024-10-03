import React, { useState } from "react";

const withMousePosition = (Component) => {
  return (props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
      <div
        style={{
          "--mouse-x": position.x + "px",
          "--mouse-y": position.y + "px",
        }}
        onMouseMove={handleMouseMove}
      >
        <Component {...props} />
      </div>
    );
  };
};

export default withMousePosition;
