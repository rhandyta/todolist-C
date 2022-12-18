import React, { useCallback, useState } from "react";
import City from "./City";

function Index() {
    const [count, setCount] = useState(0);
    const [city, setCity] = useState(["Jakarta", "Kalimantan", "Surabaya"]);

    const addCity = useCallback(() => {
        setCity((prev) => [...prev, "Kota Baru"]);
    }, [city]);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{count}</h1>
            <div style={{ textAlign: "center" }}>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            <hr />
            <City cities={city} addData={addCity} />
        </div>
    );
}

export default Index;
