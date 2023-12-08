import React from 'react';

// @ts-ignore
const TextSizeControl = ({ onChange }) => {
    return (
        <div>
            <label>Change text size: </label>
            <input type="range" min="10" max="30" onChange={(e) => onChange(parseInt(e.target.value, 10))} />
        </div>
    );
};

export default TextSizeControl;