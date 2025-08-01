import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<
    { id: number; title: string; isComplete: boolean }[]
  >([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api/todo");
 
      

        setTodos(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
         console.error(" Error fetching todos:"
          , err);
      setTodos([]);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await axios.post(
        "/api/todo", { title, isComplete: false }
      );
      setTitle("");
      fetchTodos();
    } catch (err) {
      console.error("Error creating todo:", err);
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.length === 0 ? (
          <li>No todos found.</li>
        ) : (
          todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
