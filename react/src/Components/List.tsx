import { useSelector } from "react-redux";
import type { TodoType } from "../types/type";
import ConfirmUpdate from "./Btns/ConfirmUpdate";
import DeleteBtn from "./Btns/DeleteBtn";
import UpdateBtn from "./Btns/UbdateBtn";
import NoItems from "./NoItems";
import type { RootState } from "../store/store";

const List = ({ fetchTodos }: { fetchTodos: () => void }) => {
  const { editId, todos } = useSelector((state: RootState) => state.todos);

  return (
    <div className="">
      <ul className="space-y-4">
        {todos.length === 0 ? (
          <NoItems />
        ) : (
          todos.map((todo: TodoType) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white/80 rounded-xl shadow-md px-6 py-4 hover:scale-[1.02] transition-transform duration-200 border border-purple-100"
            >
              {editId === todo.id ? (
                <ConfirmUpdate todo={todo} fetchTodos={fetchTodos} />
              ) : (
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-lg font-medium text-purple-700">
                    {todo.title}
                  </span>
                  <div className="flex gap-2">
                    <DeleteBtn todo={todo} fetchTodos={fetchTodos} />
                    <UpdateBtn todo={todo} />
                  </div>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
