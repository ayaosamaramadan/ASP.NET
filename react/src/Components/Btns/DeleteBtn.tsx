import axios from "axios";
import type { TodoType } from "../../types/type";
import { FaDeleteLeft } from "react-icons/fa6";

const DeleteBtn = ({
  todo,
  fetchTodos,
}: {
  todo: TodoType;
  fetchTodos: () => void;
}) => {
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/todo/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <button
      title="Delete Todo"
      onClick={() => handleDelete(todo.id)}
      className="cursor-pointer px-4 py-2 bg-gradient-to-r from-red-400 to-pink-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-red-500 hover:to-pink-500 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
    >
      <FaDeleteLeft  className="text-lg" />
    </button>
  );
};

export default DeleteBtn;
