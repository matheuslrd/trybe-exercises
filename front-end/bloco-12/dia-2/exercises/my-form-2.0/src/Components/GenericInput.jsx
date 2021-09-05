import React from "react";

class GenericInput extends React.Component {
  render() {
    const { className, description, type, maxLength, name, onChange, value } = this.props;

    return(
      <label htmlFor= { name }>
        { description } <br />
        <input 
          className = { className }
          type={type} 
          maxLength={ maxLength } 
          name={ name } 
          onChange= { onChange }
          value = {value}
          required
        />
      </label>
    );
  }
}

export default GenericInput;