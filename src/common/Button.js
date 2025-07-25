export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
className="px-4 py-2 h-9 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition"
    >
      {children}
    </button>
  );
}
