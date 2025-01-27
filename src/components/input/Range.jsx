import { useState } from 'react';

export const Range = () => {
    const [value, setValue] = useState(50);
    let minValue = 0;
    let maxValue = 100;

    const handleChange = (delta) => {
        let newValue = value - delta;

        if (newValue >= minValue && newValue <= maxValue) {
            setValue(newValue);
        }
    }

    return (
        <div class="range-container">
            <button onClick={() => handleChange(4)}>+</button>
            <input type="range" min={minValue} max={maxValue} value={value} step={4} />
            <button onClick={() => handleChange(-4)}>-</button>
        </div>
    )
}


