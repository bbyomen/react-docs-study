import { useState } from "react";

// TODO:
// 이 목록에서 각 Contact에는 “Show email”를 눌렀는지 여부를 결정하는 state가 있습니다.
// reverse를 실행해도 컴포넌트가 "Show email" 상태값을 유지하도록 변경해주세요

export default function Challenge1() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          value={reverse}
          onChange={(e) => {
            setReverse(e.target.checked);
          }}
        />{" "}
        Show in reverse order
      </label>
      <ul className="week4-contacts">
        {displayedContacts.map((contact, i) => (
          <li key={i} className="contact-item">
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];

function Contact({ contact }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p>
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Hide" : "Show"} email
      </button>
    </>
  );
}
