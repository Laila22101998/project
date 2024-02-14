import { createSlice } from "@reduxjs/toolkit";

const Initializer = createSlice({
  name: "app",
  initialState: {
    login: {},
    expand:false,
    routeName:"",
    themes:{},
  },
  reducers: {
    setLogin: (state, actions) => {
      state.login = actions.payload;
    },
    setExpand:(state,actions)=>{
      state.expand = actions.payload;
    },
    setRouteName:(state,actions)=>{
      state.routeName = actions.payload;
    },
    setTheme:(state,actions)=>{
      state.themes = actions.payload;
    }
    // clearAppState: (state) => {
    //   state.templateContent = null;
    // },
  },
});

export const {
    setLogin,
    setExpand,
    setRouteName,
    setTheme,
} = Initializer.actions;

const appReducer = Initializer.reducer;

export default appReducer;
