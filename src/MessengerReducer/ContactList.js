export default function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <section className="w-1/4 bg-white shadow-lg rounded-lg m-4 p-6">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="mb-2">
            <button
              className={`w-full text-left p-2 rounded-lg ${
                selectedId === contact.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => {
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id,
                });
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
