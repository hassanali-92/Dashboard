

export default function HobbyList({ hobbies, darkMode }) {
  return (
    <div
      className={
        "p-6 rounded-2xl shadow-lg " +
        (darkMode ? "bg-neutral-800 text-white" : "")
      }
    >
      <h3 className="text-xl font-bold mb-3">Hobbies</h3>
      <ul className="space-y-2">
        {hobbies.map((hobby, index) => (
          <li
            key={index}
            className="p-3 rounded-xl bg-gray-200 text-black"
          >
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  );
}
