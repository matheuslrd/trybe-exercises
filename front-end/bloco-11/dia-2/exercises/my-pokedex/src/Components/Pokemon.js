import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Pokemon extends React.Component {

  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;

    return (
      <section className="container-pokemon">
        <h2>{ name }</h2>
        <p>Este pokemon é do tipo { type }</p>
        <p>Seu peso é { value } { measurementUnit }</p>
        <img src={ image } alt={`Imagem do pokemon ${name}`} width='150px'></img>
      </section>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default Pokemon;