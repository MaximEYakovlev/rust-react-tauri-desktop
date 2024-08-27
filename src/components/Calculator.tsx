import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>("");

    const handleClick = (value: string) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="display">{input}</div>
            <div className="buttons">
                {["7", "8", "9", "/"].map((value) => (
                    <button onClick={() => handleClick(value)} key={value}>
                        {value}
                    </button>
                ))}
                {["4", "5", "6", "*"].map((value) => (
                    <button onClick={() => handleClick(value)} key={value}>
                        {value}
                    </button>
                ))}
                {["1", "2", "3", "-"].map((value) => (
                    <button onClick={() => handleClick(value)} key={value}>
                        {value}
                    </button>
                ))}
                {["0", ".", "=", "+"].map((value) => (
                    <button
                        onClick={
                            value === "="
                                ? handleCalculate
                                : () => handleClick(value)
                        }
                        key={value}
                    >
                        {value}
                    </button>
                ))}
                <button onClick={handleClear} className="clear-button">
                    C
                </button>
            </div>
        </div>
    );
};

export default Calculator;
