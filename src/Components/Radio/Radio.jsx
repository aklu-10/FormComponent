import React from 'react'
import { useContext } from 'react';
import FormContext from '../../../context/formContext';

const Radio = (props) => {

    const {formData, setFormData} = useContext(FormContext);

    function handleChange(e)
    {
        setFormData({...formData, [props.fieldName]:e.target.value});
    }

  return (
    <div className="formField">
        <label>{props.label}</label>
        <div className='radioFields'>
            {
                props.options.map((item,index)=>(
                    <div key={index} className='formfield'>
                        <input id={item} type='radio' value={item} name={props.fieldName} onClick={handleChange}/>
                        <label htmlFor={item}>{item}</label>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Radio