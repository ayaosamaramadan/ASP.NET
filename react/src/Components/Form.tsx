import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setTitle } from "../store/slice";

const Form = ( { fetchTodos }: { fetchTodos: () => void } ) => {

     const {  title  } = useSelector(
    (state: RootState) => state.todos
  );

    const dispatch =useDispatch();
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

    return ( <>  
       <h1>Todo List</h1>
       
         <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => dispatch(setTitle(e.target.value))}
                placeholder="Enter todo title"
              />
              <button type="submit">Add</button>
            </form>
            
            </> );
}
 
export default Form;