import { useState } from "react";
import { foods, filterItems } from "./data.js";

// 예제에서 SearchBar에는 텍스트 입력창을 제어하는 자체 query state가 있습니다.부모인 FilterableList 컴포넌트는 항목의 List를 표시하지만 검색 쿼리는 고려하지 않습니다.
// 검색 쿼리에 따라 목록을 필터링하려면 filterItems(foods, query) 함수를 사용합니다. 변경 사항을 테스트하려면, 입력에 “s”를 입력하면 목록이 “Sushi”, “Shish kebab”, “Dim sum”으로 필터링되는지 확인합니다.
// filterItems는 이미 구현되어 import 되어 있으므로 직접 작성할 필요가 없습니다!
export default function Challenge2() {
  return (
    <>
      <SearchBar />
      <hr />
      <List items={foods} />
    </>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
