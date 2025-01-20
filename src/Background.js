export default function Background({ position }) {
  return (
    <div
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className="absolute inset-0 bg-yellow-100 rounded-md opacity-50"
    />
  );
}
