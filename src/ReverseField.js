import { useState } from "react";

export default function ReverseField() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label className="flex items-center space-x-2 mb-4">
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
        className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
      />
      <span className="text-gray-700">Reverse order</span>
    </label>
  );

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      {reverse ? (
        <>
          <Field label="Last name" key="lastname" />
          <Field label="First name" key="firstname" />
        </>
      ) : (
        <>
          <Field label="First name" key="firstname" />
          <Field label="Last name" key="lastname" />
        </>
      )}
      {checkbox}
    </div>
  );
}

function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label className="block mb-4">
      <span className="text-gray-700">{label}:</span>
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </label>
  );
}
