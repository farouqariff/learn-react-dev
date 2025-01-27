export default function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <section>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => onSelect(contact.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                contact.id === selectedId
                  ? "bg-purple-600 text-white"
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
