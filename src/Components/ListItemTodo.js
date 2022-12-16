import axios from "axios";
import React, { useState } from "react";
const URL = "http://localhost:5000/data";

const ListItemTodo = ({ todo, id, deleteData, updateData }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [initialTodo, setInitialTodo] = useState({todo});


    async function submitHandler(e) {
        e.preventDefault();
        await updateData(id, initialTodo)
        setIsEdit(!isEdit);
    }

    return (
        <li className="todo-item">
            <form className="form-edit" onSubmit={submitHandler}>
                {
                    !isEdit ? <input
                    disabled
                    type="text"
                    className="input-no-border"
                    value={initialTodo.todo}
                /> :
                    <input
                    type="text"
                    className="input-with-border"
                    value={initialTodo.todo}
                    onChange={(e) => setInitialTodo({todo: e.target.value})}
                />
                }
            </form>
            {
                !isEdit ? <><button className="btn btn__action btn__action-edit" onClick={() => setIsEdit(!isEdit) }>Edit</button>
                <button className="btn btn__action btn__action-delete" onClick={() => deleteData(id)}>
                    Hapus
                </button></> :
                <><button className="btn btn__action btn__action-simpan" onClick={submitHandler}>Simpan</button>
                <button className="btn btn__action btn__action-batal" onClick={() => setIsEdit(!isEdit)}>
                    Batal
                </button></>
            }
        </li>
    );
};

export default ListItemTodo;
