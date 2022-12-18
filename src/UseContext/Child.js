import React, { useRef } from "react";
import { useAppContext } from "./UseContext";

function Child() {
    const context = useAppContext();
    const inputRef = useRef();

    function handleClick(e) {
        context.setName(inputRef.current.value);
        inputRef.current.value = "";
    }
    return (
        <div>
            <h1>{context.name}</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default Child;
