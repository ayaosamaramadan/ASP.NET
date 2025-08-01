import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setTitle } from "../store/slice";

const Form = ({ fetchTodos }: { fetchTodos: () => void }) => {
  const { title } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      await axios.post("/api/todo", { title, isComplete: false });
      dispatch(setTitle(""));
      fetchTodos();
    } catch (err) {
      console.error("Error creating todo:", err);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-4 tracking-tight drop-shadow">
        Add a New Task
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 items-center justify-center"
      >
        <input
          type="text"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
          placeholder="Enter todo title"
          className="text-purple-900 px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md w-2/3 text-lg bg-white/80 placeholder:text-purple-300"
        />
        <button
          type="submit"
          className="cursor-pointer px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
