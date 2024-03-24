import React, { useContext } from "react";

const FunctionA = () => {
    return (
        <ColorTheme.Provider value={{ bkgA: "green" }}>
            <FunctionB />
        </ColorTheme.Provider>
    );
}

const FunctionB = () => {
    const value = useContext(ColorTheme);
    return (
        <div>
            <h1 style={{ color: value.bkgA }}>
                Contexto B
            </h1>
        </div>
    );
}

export default FunctionA;
