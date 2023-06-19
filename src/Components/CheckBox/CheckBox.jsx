import React from 'react'
import { useContext } from 'react';
import FormContext from '../../../context/formContext';

const CheckBox = (props) => {

    const {formData, setFormData} = useContext(FormContext);

    function handleChange(e)
    {
        if(props.fieldName in formData)
        {
            if(!formData[props.fieldName].includes(e.target.value))
                setFormData({...formData,[props.fieldName]:[...formData[props.fieldName], e.target.value]})
            else
            {
                setFormData({...formData,[props.fieldName]:[...formData[props.fieldName].filter((item)=>item!=e.target.value)]})
            }
        }
        else
            setFormData({...formData,[props.fieldName]:[e.target.value]})
    }

  return (
    <div className="formField">
        <label>{props.label}</label>
        <div className='checkboxFields'>
            {
                props.options.map((item,index)=>(
                    <div key={index} className='formfield'>

                        <input id={item} type='checkbox' value={item} name={props.fieldName} onClick={handleChange}/>
                        <label htmlFor={item}>{item}</label>

                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default CheckBox