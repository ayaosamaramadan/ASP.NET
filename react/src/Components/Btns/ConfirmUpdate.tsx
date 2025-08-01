import { useDispatch, useSelector } from "react-redux";
import type { TodoType } from "../../types/type";
import type { RootState } from "../../store/store";
import { setEditId, setEditTitle } from "../../store/slice";
import axios from "axios";

const ConfirmUpdate = ({ todo, fetchTodos }: { todo: TodoType; fetchTodos: () => void }) => {

    const { editTitle } = useSelector((state: RootState) => state.todos);

    const dispatch = useDispatch();

     const handleUpdate = async (id: number) => {
    try {
      await axios.put(`/api/todo/${id}`, {
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

    return (   <>
                    <input
                      title="Edit Todo"
                      type="text"
                      value={editTitle}
                      onChange={(e) => dispatch(setEditTitle(e.target.value))}
                    />
                    <button onClick={() => handleUpdate(todo.id)}>Save</button>
                    <button onClick={() => dispatch(setEditId(null))}>
                      Cancel
                    </button>
                  </>
                  
                );
}
 
export default ConfirmUpdate;