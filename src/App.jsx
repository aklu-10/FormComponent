import React, { useState } from 'react'
import Form from './Components/Form/Form'
import Field from './Components/Field/Field'
import './App.css';

const App = () => {

  const [fileSetters, setFileSetters] = useState({});

  function getFileStateAndSetter(func)
  {
    setFileSetters(func.setSource, setFileName);
  }

   return (
      <Form fileSetters={fileSetters} heading={"Sign Up"}>
          <Field 
          control="input"
          type="text"
          fieldName="firstName"
          label="First Name"
           />

          <Field
          control="input"
          type="text"
          fieldName="lastName"
          label="Last Name"
           />

          <Field getFileStateAndSetter={getFileStateAndSetter}
          control="input"
          type="file"
          fieldName="file"
           />

          <Field
          control="select"
          options={["Vanilla","Chocolate","Buttersotch"]}
          fieldName="iceCream"
          label="Select Ice Cream"
           />

          <Field
          control="radio"
          options={["Goa","Delhi","Uttar Pradesh"]}
          fieldName="city"
          label="Select City"
           />

          <Field
          control="checkbox"
          options={["Eating","Drinking","Chilling"]}
          fieldName="interest"
          label="Favourite Activity"
           />

          <Field
          control="button"
          type="reset"
           />

          <Field
          control="button"
          type="submit"
           />
      </Form>
    )

}

export default App