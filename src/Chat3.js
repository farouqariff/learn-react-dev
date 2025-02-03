import { useState, useRef } from "react";

export default function Chat3() {
  const [text, setText] = useState("");
  const textRef = useRef(text);

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + text);
    }, 3000);
  }

  function handleChange(e) {
    setText(e.target.value);
    textRef.current = e.target.value;
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
