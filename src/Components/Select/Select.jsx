import React from 'react'
import { useContext } from 'react';
import FormContext from '../../../context/formContext';

const Select = (props) => {

    const {formData, setFormData} = useContext(FormContext);

    function handleChange(e)
    {
        setFormData({...formData, [props.fieldName]:e.target.value});
    }

  return (

    <div className="formField">
        <label>{props.label}</label>
        <select onChange={handleChange}>
            <option selected disabled>Please Select</option>
            {
                props.options.map((item, index)=>(
                    <option key={index} value={item}>{item}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Select