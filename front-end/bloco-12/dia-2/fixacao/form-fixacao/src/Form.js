import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.handleName = this.handleName.bind(this);
    this.state = {
      name: "",
      email: "",
      conteNosMais: "",
      estado: null,
      vaiComparecer: false,
    };
  }

  handleName({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="form">
        <label>
          Nome:
          <input name="name" onChange={this.handleName} type="text" />
        </label>

        <label>
          E-mail:
          <input type="email" name="email"  onChange={this.handleName} />
        </label>

        <label>
          Conte-nos mais:
          <textarea name="conteNosMais"  onChange={this.handleName} ></textarea>
        </label>

        <label>
          Vai comparecer?
          <input type="checkbox" name="vaiComparecer"  onChange={this.handleName} />
        </label>

        <label>
          Estado:
          <select name="estado"  onChange={this.handleName} >
            <option>Selecione</option>
            <option>BH</option>
            <option>SP</option>
            <option>RJ</option>
            <option>RS</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
