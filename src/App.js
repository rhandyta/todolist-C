import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import CustomHook from "./CustomHooks/CustomHook";
import Index from "./Memo/Index";
import Parent from "./UseContext/Parent";
import { AppProvider } from "./UseContext/UseContext";
import UseReducerCounter from "./UseReducer/UseReducerCounter";
import UseRef from "./UseRef/UseRef";
function App() {
    return <CustomHook />;
}

export default App;
