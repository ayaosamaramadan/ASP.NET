import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, isComplete: false }),
    });
    setTitle("");
    // Optionally: show a success message or refresh list
  };

  return (
    <div className="container">
      <h1>Create Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
