import { createSlice,
    //  PayloadAction
     } from "@reduxjs/toolkit";

type Todo = { id: number; title: string; isComplete: boolean };

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
  
  },
});

// export const { } = todoSlice.actions;
export default todoSlice.reducer;
