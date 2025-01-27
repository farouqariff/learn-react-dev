import { useState } from "react";
import { foods, filterItems } from "./FilterItems.js";

export default function FilterableList() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <SearchBar query={query} onChange={handleChange} />
      <hr className="my-4 border-gray-300" />
      <List items={results} />
    </div>
  );
}

function SearchBar({ query, onChange }) {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Search:
      <input
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <tbody>
        {items.map((food) => (
          <tr key={food.id} className="hover:bg-gray-50">
            <td className="px-4 py-2 border-b border-gray-300 font-medium text-gray-900">
              {food.name}
            </td>
            <td className="px-4 py-2 border-b border-gray-300 text-gray-700">
              {food.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
