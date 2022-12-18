import React, { memo } from "react";

function City({ cities, addData }) {
    console.log("city dirender");
    return (
        <div style={{ textAlign: "center" }}>
            {cities.map((city, index) => (
                <li key={index}>{city}</li>
            ))}
            <button onClick={addData}>Tambah Kota Baru</button>
        </div>
    );
}

export default memo(City);
