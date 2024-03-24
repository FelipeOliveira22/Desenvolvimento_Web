import React from "react";
import ColorTheme from "./Contexto";

const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {cores => (
                <div style={{ backgroundColor: cores.bkgB }}>
                    <h1>Contexto B</h1>
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextB;
