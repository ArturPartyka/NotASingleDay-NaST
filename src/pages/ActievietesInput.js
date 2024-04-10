import React from 'react';

function ActievietesInput({ text, activity, checked, click }) {
    return (
        <label htmlFor={activity}>
            {text}
            <input type="checkbox"
                checked={checked}
                onClick={click} />
        </label>
    );
}

export default ActievietesInput;