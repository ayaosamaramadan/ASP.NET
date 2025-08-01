import { useSelector } from "react-redux";
import type { TodoType } from "../types/type";
import ConfirmUpdate from "./Btns/ConfirmUpdate";
import DeleteBtn from "./Btns/DeleteBtn";
import UpdateBtn from "./Btns/UbdateBtn";
import NoItems from "./NoItems";
import type { RootState } from "../store/store";


const List =( { fetchTodos }: { fetchTodos: () => void } ) => {

      const { editId, todos } = useSelector(
    (state: RootState) => state.todos
  );

    return ( <> <ul>
          {todos.length === 0 ? (
          <NoItems/>
          ) : (
            todos.map((todo: TodoType) => (
              <li key={todo.id}>
                {editId === todo.id ? (
                  <ConfirmUpdate todo={todo} fetchTodos={fetchTodos} />
                ) : (
                  <>
                    {todo.title}
                    <DeleteBtn todo={todo} fetchTodos={fetchTodos} />
                    <UpdateBtn todo={todo} />
                  </>
                )}
              </li>
            ))
          )}
        </ul>
        </> );
}
 
export default List;