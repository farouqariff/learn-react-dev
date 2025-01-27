import { useState } from "react";
import ContactList from "./ContactList.js";
import EditContact from "./EditContact.js";

export default function ContactManager() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  function handleSave(updatedData) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-50 to-blue-50 p-8">
      <div className="w-1/3 bg-white rounded-lg shadow-lg p-6 mr-8">
        <ContactList
          contacts={contacts}
          selectedId={selectedId}
          onSelect={(id) => setSelectedId(id)}
        />
      </div>
      <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
        <EditContact
          initialData={selectedContact}
          onSave={handleSave}
          key={selectedContact.id}
        />
      </div>
    </div>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
