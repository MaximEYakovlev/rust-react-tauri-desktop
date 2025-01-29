import { useState } from 'react';
import styles from './Range.module.css'

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
        <div className={styles.container}>
            <button onClick={() => handleChange(4)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
            </button>
            <input type="range" min={minValue} max={maxValue} value={value} step={4} />
            <button onClick={() => handleChange(-4)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
            </button>
        </div>
    )
}


