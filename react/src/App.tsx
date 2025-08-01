/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import axios from "axios";
// import type { TodoType } from "../types/type";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTodos } from "./store/slice";
import Form from "./Components/Form";
import List from "./Components/List";
// import type { RootState } from "../store/store";
// import UpdateBtn from "./Btns/UbdateBtn";
// import DeleteBtn from "./Btns/DeleteBtn";
// import ConfirmUpdate from "./Btns/ConfirmUpdate";


const App = () => {

  const dispatch = useDispatch();

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api/todo");
      dispatch(setTodos(Array.isArray(res.data) ? res.data : []));
    } catch (err) {
      console.error(" Error fetching todos:", err);
      dispatch(setTodos([]));
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

 

  return (
    <>
      <div className="container">
     
    <Form fetchTodos={fetchTodos} />
       <List fetchTodos={fetchTodos} />
      </div>
    </>
  );
};

export default App;
