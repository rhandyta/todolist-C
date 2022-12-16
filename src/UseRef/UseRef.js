import React, { useRef } from "react";

function UseRef() {
    const btnRef = useRef();
    const redColor = "white";
    return (
        <div>
            <button
                onClick={(e) =>
                    (btnRef.current.style.backgroundColor = redColor)
                }
                ref={btnRef}
            >
                Change Color
            </button>
        </div>
    );
}

export default UseRef;
