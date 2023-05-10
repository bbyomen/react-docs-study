import { useReducer, useState } from "react";
import { produce } from "immer";
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

const initialState = {
  contacts: initialContacts,
  messages: initialMessages,
  selectedId: null,
  statusFilter: "",
};

const ChatReducer = (state, action) => {
  const { messages, contacts } = state;
  switch (action.type) {
    case "change_filter":
      return { ...state, statusFilter: action.filter };
    case "change_selected_id":
      return { ...state, selectedId: action.id };
    case "change_message":
      const newMsgs = { ...messages };
      newMsgs[action.id].message = action.value;
      const newContacts = [...contacts];
      const targetIndex = contacts.findIndex((c) => c.id === action.id);
      newContacts[targetIndex].status = action.value ? "writing" : "pending";
      return { ...state, messages: newMsgs, contacts: newContacts };
    case "send_message":
      const msgs = { ...messages };
      msgs[action.id].message = "";
      const updatedContacts = [...contacts];
      const index = contacts.findIndex((c) => c.id === action.id);
      updatedContacts[index].status = "sent";
      return {
        messages: msgs,
        contacts: updatedContacts,
        selectedId: null,
        statusFilter: "",
      };
    default:
      return state;
  }
};
const ChatReducerWithImmer = produce((draft, action) => {
  switch (action.type) {
    case "change_filter":
      draft.statusFilter = action.filter;
      break;
    case "change_selected_id":
      draft.selectedId = action.id;
      break;
    case "change_message":
      draft.messages[action.id].message = action.value;
      const targetIndex = draft.contacts.findIndex((c) => c.id === action.id);
      draft.contacts[targetIndex].status = action.value ? "writing" : "pending";
      break;
    case "send_message":
      draft.messages[action.id].message = "";
      const index = draft.contacts.findIndex((c) => c.id === action.id);
      draft.contacts[index].status = "sent";
      draft.selectedId = null;
      draft.statusFilter = "";
      break;
    default:
      break;
  }
});

export default function Reducer() {
  const [{ contacts, messages, statusFilter, selectedId }, dispatch] =
    useReducer(ChatReducerWithImmer, initialState);

  const filteredContacts = contacts.filter(({ status }) => {
    if (!statusFilter) return true;
    return status === statusFilter;
  });
  const contact = contacts.find((c) => c.id === selectedId);
  const message = contact ? messages[contact.id].message : "";

  const handleFilterChange = (e) => {
    dispatch({ type: "change_filter", filter: e.target.value });
  };

  const handleContactClick = (id) => {
    dispatch({ type: "change_selected_id", id });
  };

  const handleMessageChange = (id, value) => {
    dispatch({ type: "change_message", id, value });
  };

  const handleSend = (id, message) => {
    alert(message);
    dispatch({ type: "send_message", id });
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
