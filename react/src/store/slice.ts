import { createSlice,
    //  PayloadAction
     } from "@reduxjs/toolkit";

type Todo = { id: number; title: string; isComplete: boolean };

interface TodoState {
  todos: Todo[];
  editId?: number | null;
  editTitle?: string;
  title?: string;
 
  setEditId?: (id: number | null) => void;
  setEditTitle?: (title: string) => void;
  setTodos?: (todos: Todo[]) => void;
  setTitle?: (title: string) => void;
}

const initialState: TodoState = {
  todos: [],
  editId: null,
  editTitle: "",
  title: "",

  setEditId: (id: number | null) => {
    initialState.editId = id;
  },
  setEditTitle: (title: string) => {
    initialState.editTitle = title;
  },
  setTodos: (todos: Todo[]) => {
    initialState.todos = todos;
  },
  setTitle: (title: string) => {
    initialState.title = title;
  },

};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
  
  },
});

// export const { } = todoSlice.actions;
export default todoSlice.reducer;
