import { Component } from "react";

class Button extends Component {
  render() {
    const { type, description, className, onClick } = this.props;

    return (
      <button className={className} type={type} onClick={onClick}>
        {description}
      </button>
    );
  }
}

export default Button;
