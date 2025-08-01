import { useDispatch } from "react-redux";
import type { TodoType } from "../../types/type";
// import type { RootState } from "@reduxjs/toolkit/query";
import { setEditId, setEditTitle } from "../../store/slice";

const UpdateBtn = ({ todo }: { todo: TodoType }) => {


    const dispatch = useDispatch();
    
  const handleEdit = (todo: TodoType) => {
    dispatch(setEditId(todo.id));
    dispatch(setEditTitle(todo.title));
  };


    return ( <>
     <button title="Edit Todo" onClick={() => handleEdit(todo)}>
                      Update
                    </button>
                    </> );
}
 
export default UpdateBtn;