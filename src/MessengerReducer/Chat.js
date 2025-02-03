export default function Chat({ contact, message, dispatch }) {
  return (
    <section className="flex flex-col flex-1 p-6 bg-white shadow-lg rounded-lg m-4">
      <textarea
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={message}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`);
          dispatch({
            type: "sent_message",
          });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
