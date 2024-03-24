import React from "react";
import FunctionContextD from "./FunctionD";
import ColorTheme from "./Contexto";

const FunctionContextC = () => {
    return (
        <ColorTheme.Consumer>
            {cores => (
                <div style={{ backgroundColor: cores.bkgC }}>
                    <h1>Contexto C</h1>
                    <FunctionContextD />
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextC;
