import React from "react";
import useFetch from "./useFetch";

function CustomHook() {
    const data = useFetch("https://jsonplaceholder.typicode.com/users");
    return (
        <div>
            <ul>
                {data && data.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
}

export default CustomHook;
