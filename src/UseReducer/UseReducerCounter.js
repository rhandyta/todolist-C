import React, { useReducer } from "react";

function UseReducerCounter() {
    const [counter, dispatch] = useReducer(reducer, 0);

    function reducer(state, action) {
        switch (action.type) {
            case "INCREMENT":
                return state + action.value;
            case "DECREMENT":
                return state - action.value;
            default:
                throw new Error();
        }
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{counter}</h1>
            <div style={{ textAlign: "center" }}>
                <button
                    onClick={() => dispatch({ type: "INCREMENT", value: 5 })}
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch({ type: "DECREMENT", value: 5 })}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default UseReducerCounter;
