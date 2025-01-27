import { useState } from "react";

export default function HintForm() {
  const [showHint, setShowHint] = useState(false);
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      {showHint && (
        <p className="mb-4 text-gray-600 italic">
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form />
      <button
        onClick={() => setShowHint(!showHint)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {showHint ? "Hide" : "Show"} Hint
      </button>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");
  return (
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      rows={4}
    />
  );
}
