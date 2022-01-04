import React from 'react';
import './form-input.scss'


const FormInput = ({ handleChange, label, ...inputProps }) => {

    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                {...inputProps}
                // id={inputProps.id}  
                // type={inputProps.type}   
                // name={inputProps.name}  
                // defaultValue={inputProps.value}
            />
            <label className={`${inputProps.defaultValue.length ? 'shrink ' : ''}form-input-label`} htmlFor={inputProps.id}>{label}</label>
        </div>
    )
}

export default FormInput;