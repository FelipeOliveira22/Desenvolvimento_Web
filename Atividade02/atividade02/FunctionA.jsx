import React from "react";
import FunctionContextB from "./FunctionB";
import FunctionContextC from "./FunctionC";
import FunctionContextD from "./FunctionD";
import ColorTheme from "./Contexto";

const FunctionA = () => {
    const cores = {
        bkgA: "green",
        bkgB: "white",
        bkgC: "yellow",
        bkgD: "blue"
    };

    return (
        <ColorTheme.Provider value={cores}>
            <div style={{ backgroundColor: cores.bkgA }}>
                <h1>Contexto A</h1>
            </div>
            <FunctionContextB />
            <FunctionContextC />
            <FunctionContextD />
        </ColorTheme.Provider>
    );
};

export default FunctionA;
