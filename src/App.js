import { useState } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import Parent from "./UseContext/Parent";
import { AppProvider } from "./UseContext/UseContext";
import UseReducerCounter from "./UseReducer/UseReducerCounter";
import UseRef from "./UseRef/UseRef";
function App() {
    return (
        <AppProvider>
            <Parent />
        </AppProvider>
    );
}

export default App;
