import React from 'react';

class GenericSelect extends React.Component {
  render(){
    const { name, description, className, listCountry, onChange } = this.props;

    return (
      <label htmlFor={ name }>
        { description }
        <select name={ name } className= { className } onChange={ onChange }>
          { listCountry }
        </select>
      </label>
    );
  }
}

export default GenericSelect;