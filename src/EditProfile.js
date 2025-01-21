import { useState } from "react";

export default function Test() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [isSave, setIsSave] = useState(false);

  return (
    <form
      className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setIsSave(!isSave);
      }}
    >
      <label className="block">
        <span className="block text-sm font-medium text-gray-700">
          First name
        </span>
        <div className="flex items-center space-x-3 mt-1">
          {isSave ? (
            <input
              type="text"
              className="flex-1 h-10 py-2 px-3 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          ) : (
            <b className="text-gray-900">{firstName}</b>
          )}
        </div>
      </label>
      <label className="block">
        <span className="block text-sm font-medium text-gray-700">
          Last name
        </span>
        <div className="flex items-center space-x-3 mt-1">
          {isSave ? (
            <input
              type="text"
              className="flex-1 h-10 py-2 px-3 rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          ) : (
            <b className="text-gray-900">{lastName}</b>
          )}
        </div>
      </label>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {isSave ? "Save " : "Edit "} Profile
      </button>
      <p className="text-center text-sm text-gray-500 italic">
        Hello,{" "}
        <span className="text-gray-800 font-medium">
          {firstName + " " + lastName}
        </span>
        !
      </p>
    </form>
  );
}
