import React from "react";
import axios from "axios";
import FormAdd from "./FormAdd";
import { useState } from "react";
import { useEffect } from "react";
import ListItemTodo from "./ListItemTodo";
const URL = "http://localhost:5000/data";
const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await axios.get(URL).then((res) => {
                try {
                    // console.log(res.data)
                    setTodos(res.data);
                } catch (err) {
                    console.log(err);
                }
            });
        };
        getData();
    }, []);

    async function addTodo(todo) {
        const { data } = await axios.post(URL, todo);
        setTodos([...todos, data]);
    }

    async function deleteTodo(id) {
        const { data } = await axios.delete(`${URL}/${id}`);
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }

    async function updateTodo(id, todo) {
        const { data } = await axios.put(`${URL}/${id}`, todo);
    }

    return (
        <>
            <FormAdd addData={addTodo} />
            <ul>
                {todos
                    .map((todo) => {
                        return (
                            <ListItemTodo
                                key={todo.id}
                                id={todo.id}
                                todo={todo.todo}
                                deleteData={deleteTodo}
                                updateData={updateTodo}
                            />
                        );
                    })
                    .reverse()}
            </ul>
        </>
    );
};

export default TodoList;
