// import { useState } from "react";
import { useImmer } from "use-immer";
import Background from "./Background.js";
import Box from "./Box.js";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  //   const [shape, setShape] = useState({
  //     color: "orange",
  //     position: initialPosition,
  //   });
  const [shape, updateShape] = useImmer({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    // setShape({
    //   ...shape,
    //   position: {
    //     ...shape.position,
    //     x: shape.position.x + dx,
    //     y: shape.position.y + dy,
    //   },
    // });
    updateShape((draft) => {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  function handleColorChange(e) {
    // setShape({
    //   ...shape,
    //   color: e.target.value,
    // });
    updateShape((draft) => {
      draft.color = e.target.value;
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-4">
        <select
          value={shape.color}
          onChange={handleColorChange}
          className="p-2 rounded-md border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-indigo-500"
        >
          <option value="orange">Orange</option>
          <option value="lightpink">Light Pink</option>
          <option value="aliceblue">Alice Blue</option>
        </select>
      </div>
      <div className="relative w-64 h-64 border border-dashed border-gray-300 bg-gray-50 shadow-lg rounded-md">
        <Background position={initialPosition} />
        <Box color={shape.color} position={shape.position} onMove={handleMove}>
          Drag me!
        </Box>
      </div>
    </div>
  );
}
