import React, { useState } from 'react'
import './formInput.css'


const FormInputs = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    }
  return (
    <div className='formInput'>
      <label>{ label }</label>
      <input {...inputProps} onChange={onChange} onFocus={ () => inputProps.name="confirmPassword" && setFocused(true)} onBlur={handleFocus} focused={focused.toString()}></input>
      <span>{ errorMessage }</span>
    </div>
  )
}

export default FormInputs
