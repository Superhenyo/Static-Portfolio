import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

function ToggleSwitch() {
    const [checked, setChecked] = useState(true);

    const handleChange = val => {
        setChecked(val)
    }

    return (
        <div className="toggle-switch">
            <ReactSwitch
                checked={checked}
                onChange={handleChange}
                uncheckedIcon={<div>🌞</div>}
                checkedIcon={<div>🌜</div>}
            />
        </div>
    );
}

export default ToggleSwitch;
