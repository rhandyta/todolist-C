import React, { memo } from "react";

function City({ cities }) {
    console.log("city dirender");
    return (
        <div style={{ textAlign: "center" }}>
            {cities.map((city) => (
                <li key={city}>{city}</li>
            ))}
        </div>
    );
}

export default memo(City);
