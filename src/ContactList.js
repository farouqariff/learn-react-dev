export default function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section className="w-1/4 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="mb-2">
            <button
              onClick={() => onSelect(contact)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedContact.id === contact.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
