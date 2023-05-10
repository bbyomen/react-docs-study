import { useState } from "react";
const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com", status: "pending" },
  { id: 1, name: "Alice", email: "alice@mail.com", status: "pending" },
  { id: 2, name: "Bob", email: "bob@mail.com", status: "pending" },
];
const initialMessages = {
  0: { message: "" },
  1: { message: "" },
  2: { message: "" },
};

export default function NeedReducer() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [statusFilter, setStatusFilter] = useState("");

  const filteredContacts = contacts.filter(({ status }) => {
    if (!statusFilter) return true;
    return status === statusFilter;
  });
  const contact = contacts.find((c) => c.id === selectedId);
  const message = contact ? messages[contact.id].message : "";

  const handleFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleContactClick = (id) => {
    setSelectedId(id);
  };

  const handleMessageChange = (id, value) => {
    setMessages((msgs) => {
      const newMsgs = { ...msgs };
      newMsgs[id].message = value;
      return newMsgs;
    });
    setContacts((prevContacts) => {
      const newContacts = [...prevContacts];
      const targetIndex = prevContacts.findIndex((c) => c.id === id);
      newContacts[targetIndex].status = value ? "writing" : "pending";
      return newContacts;
    });
  };

  const handleSend = (id, message) => {
    alert(message);
    setMessages((msgs) => {
      const newMsgs = { ...msgs };
      newMsgs[id].message = "";
      return newMsgs;
    });
    setContacts((prevContacts) => {
      const newContacts = [...prevContacts];
      const targetIndex = prevContacts.findIndex((c) => c.id === id);
      newContacts[targetIndex].status = "sent";
      return newContacts;
    });
    setSelectedId(null);
    setStatusFilter("");
  };

  return (
    <div>
      <ContactList
        contacts={filteredContacts}
        selectedId={selectedId}
        handleClick={handleContactClick}
      />

      <Chat
        key={contact?.id ?? "not-selected"}
        message={message}
        contact={contact}
        handleChange={handleMessageChange}
        handleClick={handleSend}
      />

      <select value={statusFilter} onChange={handleFilterChange}>
        <option value="">Choose chat status!</option>
        <option value="pending">Pending</option>
        <option value="writing">Writing</option>
        <option value="sent">Sent</option>
      </select>
    </div>
  );
}

function ContactList({ contacts, selectedId, handleClick }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className={selectedId === contact.id ? "active" : ""}
              onClick={() => {
                handleClick(contact.id);
              }}
              disabled={contact.status === "sent"}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Chat({ contact, message, handleChange, handleClick }) {
  const disabled = !contact;
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={
          contact ? "Chat to " + contact.name : "Select Contact First!"
        }
        onChange={(e) => {
          handleChange(contact.id, e.target.value);
        }}
        disabled={disabled}
      />
      <br />
      <button
        disabled={disabled}
        onClick={() => handleClick(contact.id, message)}
      >
        {contact ? `Send to ${contact.email}` : "Select Contact First!"}
      </button>
    </section>
  );
}
