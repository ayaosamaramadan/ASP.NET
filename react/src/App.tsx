import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodos } from "./store/slice";
import Form from "./Components/Form";
import List from "./Components/List";
  import { useCallback } from "react";

const App = () => {
  const dispatch = useDispatch();


  const fetchTodos = useCallback(async () => {
    try {
      const res = await axios.get("/api/todo");
      dispatch(setTodos(Array.isArray(res.data) ? res.data : []));
    } catch (err) {
      console.error(" Error fetching todos:", err);
      dispatch(setTodos([]));
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-2xl p-8 backdrop-blur-lg border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8 drop-shadow-lg tracking-tight">
          To-Do App
        </h1>
        <Form fetchTodos={fetchTodos} />
        <List fetchTodos={fetchTodos} />
      </div>
    </div>
  );
};

export default App;
