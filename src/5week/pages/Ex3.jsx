import { useRef } from "react";

export default function CatFriends() {
  const itemsRef = useRef(new Map());

  function scrollToId(itemId) {
    const map = itemsRef.current;
    const node = map.get(itemId);
    node.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>Tom(0)</button>
        <button onClick={() => scrollToId(5)}>Maru(5)</button>
        <button onClick={() => scrollToId(9)}>Jellylorum(9)</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = itemsRef.current;
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              {cat.id}
              <img src={cat.imageUrl} alt={"Cat #" + cat.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 20; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
