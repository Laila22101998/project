import { createSlice } from "@reduxjs/toolkit";

const Initializer = createSlice({
  name: "app",
  initialState: {
    login: {},
    expand:false,
  },
  reducers: {
    setLogin: (state, actions) => {
      state.login = actions.payload;
    },
    setExpand:(state,actions)=>{
      state.expand = actions.payload;
    }
    // clearAppState: (state) => {
    //   state.templateContent = null;
    // },
  },
});

export const {
    setLogin,
    setExpand,
} = Initializer.actions;

const appReducer = Initializer.reducer;

export default appReducer;
