import axios from "axios";
import type { TodoType } from "../../types/type";
// import { useDispatch } from "react-redux";

const DeleteBtn = (
    { todo, fetchTodos }: { todo: TodoType; fetchTodos: () => void }
) => {

     const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/todo/${id}`);
      fetchTodos();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

    return ( <>
    
     <button
                      title="Delete Todo"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
    
    </> );
}
 
export default DeleteBtn;