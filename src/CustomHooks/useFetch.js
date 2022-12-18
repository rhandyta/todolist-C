import React, { useEffect, useState } from "react";

function useFetch(url) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async (url) => {
            const response = await fetch(url);
            let data = await response.json();
            setUsers(data);
        };
        getUsers(url);
    }, []);
    return users;
}

export default useFetch;
