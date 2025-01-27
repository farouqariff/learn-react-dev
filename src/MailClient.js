import { useState } from "react";
import { initialLetters } from "./data.js";
import Letter from "./Letter.js";

export default function MailClient() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedId, setHighlightedId] = useState(null);

  function handleHover(letterId) {
    setHighlightedId(letterId);
  }

  function handleStar(starredId) {
    setLetters(
      letters.map((letter) => {
        if (letter.id === starredId) {
          return {
            ...letter,
            isStarred: !letter.isStarred,
          };
        } else {
          return letter;
        }
      })
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Inbox</h2>
        <ul className="space-y-4">
          {letters.map((letter) => (
            <Letter
              key={letter.id}
              letter={letter}
              isHighlighted={letter.id === highlightedId}
              onHover={handleHover}
              onToggleStar={handleStar}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
