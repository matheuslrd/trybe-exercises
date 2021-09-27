import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super();

    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.state = {
      characters: [],
    }
  }

  async fetchCharacters() {
    const fetchApi = await fetch('https://rickandmortyapi.com/api/character');
    const fetchJson = await fetchApi.json();
    return this.setState({ characters: fetchJson.results });
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  showCharacters() {
    const { characters } = this.state;
    return characters.map(({ name, image }) => {
      return (
        <div className="character-container" key={ name }>
          <h3> {name} </h3>
          <img src={ image } alt={ name } />
        </div>
      );
    })
  }

  render() {
    return (
      <div className="app">
        <h1>
          Rick and Morty Characters!
        </h1>
        {this.showCharacters()}
      </div>
    );
  }
}

export default App;
