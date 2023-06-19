import React from 'react'
import FormContext from '../../../context/formContext';
import { useState } from 'react';
import './Form.css';

const Form = ({children, heading}) => {

  const [formData, setFormData] = useState({});

  function handleSubmit(e)
  {
    e.preventDefault();
    e.target.reset();
    setFormData({});
    console.log(formData);
  }

  function handleReset(e)
  {
    setFormData({});
  }

  return (
    <form onSubmit={handleSubmit} className='formContainer' onReset={handleReset}>
      <FormContext.Provider value={{formData, setFormData}}>
          <h1>{heading}</h1>
          {children}
      </FormContext.Provider>
    </form>
  )
}

export default Form