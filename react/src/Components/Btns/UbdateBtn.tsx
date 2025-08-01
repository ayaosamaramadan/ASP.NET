import { useDispatch } from "react-redux";
import type { TodoType } from "../../types/type";
// import type { RootState } from "@reduxjs/toolkit/query";
import { setEditId, setEditTitle } from "../../store/slice";
import { FaEdit } from "react-icons/fa";

const UpdateBtn = ({ todo }: { todo: TodoType }) => {
  const dispatch = useDispatch();

  const handleEdit = (todo: TodoType) => {
    dispatch(setEditId(todo.id));
    dispatch(setEditTitle(todo.title));
  };

  return (
    <button
      title="Edit Todo"
      onClick={() => handleEdit(todo)}
      className="cursor-pointer px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-purple-500 hover:to-pink-500 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
    >
      <FaEdit className="text-lg" />
    </button>
  );
};

export default UpdateBtn;
