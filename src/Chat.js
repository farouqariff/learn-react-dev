import { useState } from "react";

export default function Chat({ contact }) {
  const [text, setText] = useState("");
  return (
    <section className="flex-1 flex flex-col p-6 bg-gray-50">
      <div className="flex-1 flex flex-col justify-end">
        <textarea
          value={text}
          placeholder={"Chat to " + contact.name}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4}
        />
        <br />
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Send to {contact.email}
        </button>
      </div>
    </section>
  );
}
