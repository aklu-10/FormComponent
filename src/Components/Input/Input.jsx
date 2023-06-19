import React, { useContext } from 'react'
import FormContext from '../../../context/formContext';

const Input = (props) => {

    const {formData, setFormData} = useContext(FormContext);

    function handleChange(e)
    {
        setFormData({...formData, [props.fieldName]:e.target.value});
    }

  return (

    <div className='formField'>
        <label>{props.label}</label>
        <input type={props.type} onChange={handleChange}/>
    </div>

    )
}

export default Input