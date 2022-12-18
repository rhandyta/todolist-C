import React from "react";
import Child from "./Child";
import { useAppContext } from "./UseContext";

function Parent() {
    const context = useAppContext();
    return (
        <div>
            <h1>{context.name}</h1>
            <Child />
        </div>
    );
}

export default Parent;
