import Input from '../Input/Input'
import Select from '../Select/Select'
import Radio from '../Radio/Radio'
import Button from '../Button/Button'
import CheckBox from '../CheckBox/CheckBox'
import File from '../File/File'

const Field = (props) => {

    function getFileSetter(func)
    {
        props.getFileStateAndSetter(func);
    }

    switch(props.control)
    {
        case 'input':
            return props.type==="file" ? <File getFileSetter={getFileSetter} {...props}/> : <Input {...props}/> 
        
        case 'select':
            return <Select {...props}/> 
            
        case 'radio':
                return <Radio {...props}/> 
        
        case 'checkbox':
            return <CheckBox {...props}/> 
        
        case 'button':
                return <Button {...props}/>

        default: return "Please pass the control";
    }

}

export default Field