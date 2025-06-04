export function SubmitButton({ text }: { text: string }) {
  return (
    <button
      type="submit"
      className="text-white border-2 border-gray-700 rounded-md ring-1 bg-blue-500 hover:bg-blue-800 shadow-lg px-1.5"
    >
      {text}
    </button>
  );
}
