import React from 'react'

const Button = (props) => {

  return (
    <div className="formField">
      <button type={props.type}>{props.type[0].toUpperCase()+props.type.slice(1,)}</button>
    </div>
  )
}

export default Button