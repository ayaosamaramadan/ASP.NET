import { useEffect } from "react";
import axios from "axios";
import type { TodoType } from "../types/type";
import { useSelector } from "react-redux";

const Todo = () => {
  const {editId ,editTitle,title,todos
   , setEditId,setEditTitle,setTodos,setTitle
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }=useSelector((state: any) => state.todos);
  // const [editTitle, setEditTitle] = useState("");

  const handleEdit = (todo: TodoType) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const handleUpdate = async (id: number) => {
    try {
      await axios.put(`/api/todo/${id}`, {
        id,
        title: editTitle,
        isComplete: false,
      });
      setEditId(null);
      setEditTitle("");
      fetchTodos();
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };
  // const [title, setTitle] = useState("");
  // const [todos, setTodos] = useState<
  //   TodoType[]
  // >([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api/todo");

      setTodos(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(" Error fetching todos:", err);
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
      await axios.post("/api/todo", { title, isComplete: false });
      setTitle("");
      fetchTodos();
    } catch (err) {
      console.error("Error creating todo:", err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/todo/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <input
            type=" text"
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
            todos.map((todo: TodoType) => (
              <li key={todo.id}>
                {editId === todo.id ? (
                  <>
                    <input
                    title="Edit Todo"
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <button onClick={() => handleUpdate(todo.id)}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    {todo.title}
                    <button
                      title="Delete Todo"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                    <button title="Edit Todo" onClick={() => handleEdit(todo)}>
                      Update
                    </button>
                  </>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default Todo;
