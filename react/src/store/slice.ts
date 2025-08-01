import {
  createSlice,
  //  PayloadAction
} from "@reduxjs/toolkit";

type Todo = { id: number; title: string; isComplete: boolean };

interface TodoState {
  todos: Todo[];
  editId?: number | null;
  editTitle?: string;
  title?: string;
}

const initialState: TodoState = {
  todos: [],
  editId: null,
  editTitle: "",
  title: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: { payload: Todo[] }) => {
      state.todos = action.payload;
    },
    setEditId: (state, action: { payload: number | null }) => {
      state.editId = action.payload;
    },
    setEditTitle: (state, action: { payload: string }) => {
      state.editTitle = action.payload;
    },
    setTitle: (state, action: { payload: string }) => {
      state.title = action.payload;
    },
  },
});

export const { setTodos, setEditId, setEditTitle, setTitle } =
  todoSlice.actions;
export default todoSlice.reducer;
