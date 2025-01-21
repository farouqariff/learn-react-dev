import { useState } from "react";

// export default function Picture() {
//   const [backgroundClass, setBackgroundClass] = useState("");
//   const [pictureClass, setPictureClass] = useState("");

//   function handleColour(element) {
//     if (element === "background") {
//       setBackgroundClass("bg-purple-500");
//       setPictureClass("");
//     } else if (element === "picture") {
//       setPictureClass("border-purple-500 border-8");
//       setBackgroundClass("");
//     }
//   }

//   return (
//     <div
//       className={`background  ${backgroundClass}`}
//       onClick={() => handleColour("background")}
//     >
//       <img
//         className={`picture  ${pictureClass}`}
//         onClick={(e) => {
//           e.stopPropagation();
//           handleColour("picture");
//         }}
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//       />
//     </div>
//   );
// }

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  if (isActive) {
    return (
      <div className="background" onClick={() => setIsActive(false)}>
        <img
          className="picture border-purple-500 border-8"
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    );
  } else {
    return (
      <div className="background bg-purple-500">
        <img
          className="picture"
          onClick={(e) => {
            e.stopPropagation();
            setIsActive(true);
          }}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
        />
      </div>
    );
  }
}
