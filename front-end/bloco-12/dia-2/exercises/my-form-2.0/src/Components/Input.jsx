import React from "react";

class GenericInput extends React.Component {
  render() {
    const { className, description, type, maxLength, name, onChange, value, id } =
      this.props;

    return (
      <label htmlFor={id}>
        {description}
        <input
          className={className}
          type={type}
          maxLength={maxLength}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          required
        />
      </label>
    );
  }
}

export default GenericInput;
