export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}) {
  return (
    <li
      className={`p-4 rounded-lg transition-all duration-200 ${
        isHighlighted ? "bg-blue-50 border-l-4 border-blue-300" : "bg-gray-50"
      }`}
      onFocus={() => {
        onHover(letter.id);
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            onToggleStar(letter.id);
          }}
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            letter.isStarred
              ? "bg-yellow-400 text-yellow-900"
              : "bg-gray-200 text-gray-700"
          } hover:bg-yellow-300 transition-all duration-200`}
        >
          {letter.isStarred ? "Unstar" : "Star"}
        </button>
        <span className="text-gray-800 font-medium">{letter.subject}</span>
      </div>
    </li>
  );
}
