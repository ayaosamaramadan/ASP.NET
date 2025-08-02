import { useDispatch, useSelector } from "react-redux";
import type { TodoType } from "../../types/type";
import type { RootState } from "../../store/store";
import { setEditId, setEditTitle } from "../../store/slice";
import axios from "axios";

const ConfirmUpdate = ({
  todo,
  fetchTodos,
}: {
  todo: TodoType;
  fetchTodos: () => void;
}) => {
  const { editTitle } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const handleUpdate = async (id: number) => {
    try {
      await axios.put(`https://aspnet-production.up.railway.app/api/todo/${id}`, {
        id,
        title: editTitle,
        isComplete: false,
      });
      dispatch(setEditId(null));
      dispatch(setEditTitle(""));
      fetchTodos();
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  return (
    <div className="flex items-center gap-4 w-full">
      <input
        title="Edit Todo"
        type="text"
        value={editTitle}
        onChange={(e) => dispatch(setEditTitle(e.target.value))}
        className="px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md w-2/3 text-lg bg-white/80 placeholder:text-purple-300 text-purple-900"
      />
      <button
        onClick={() => handleUpdate(todo.id)}
        className="cursor-pointer px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-green-500 hover:to-green-600 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        Save
      </button>
      <button
        onClick={() => dispatch(setEditId(null))}
        className="cursor-pointer px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-gray-500 hover:to-gray-600 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        Cancel
      </button>
    </div>
  );
};

export default ConfirmUpdate;
