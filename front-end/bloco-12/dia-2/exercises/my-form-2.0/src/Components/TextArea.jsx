import { Component } from "react";

class TextArea extends Component {
  render() {
    const {
      name,
      id,
      className,
      maxLength,
      onMouseEnter,
      description,
      rows,
      cols,
    } = this.props;

    return (
      <label htmlFor={id}>
        {description}
        <textarea
          className={className}
          id={id}
          name={name}
          maxLength={maxLength}
          onMouseEnter={onMouseEnter}
          rows={rows}
          cols={cols}
          required
        />
      </label>
    );
  }
}

export default TextArea;
