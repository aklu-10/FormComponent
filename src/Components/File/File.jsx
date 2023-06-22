import React from 'react'
import { useContext } from 'react';
import { useState, useRef } from 'react';
import FormContext from '../../../context/formContext';

const File = (props) => {

    const [source, setSource] = useState('/uploadImage.jpg');
    const [fileName, setFileName] = useState('');

    props.getFileSetter({setSource,setFileName});

    const fileInpRef = useRef(null);

    const {formData, setFormData} = useContext(FormContext); 
    
    function handleChange(e)
    {   
        setFormData({...formData, [props.fieldName]:e.target.files[0].name})

        let fileReader = new FileReader(e.target.files[0]);

        fileReader.readAsDataURL(e.target.files[0]);

        fileReader.onload = ()=>
        {
            if(e.target.files[0].type.includes("image"))
                setSource(fileReader.result);
        }

        setFileName(e.target.files[0].name);
    }

    function handleFileInput(e)
    {
        fileInpRef.current.click();
    }


  return (
    <div className="formField">
    <label>{props.label}</label>
    <input ref={fileInpRef} type='file' hidden onChange={handleChange}/>
    <div className="fileInput" onClick={handleFileInput} >
        <div className="fileImage">
            <img id="fileInputSource" src={source} alt="fileInput"/>
        </div>
        <div className="fileName">
            <p id="inputFileName">{fileName || "Select file"}</p>
        </div>
    </div>
    
    </div>
  )
}

export default File