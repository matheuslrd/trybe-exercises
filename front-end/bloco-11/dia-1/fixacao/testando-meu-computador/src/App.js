import React from 'react';
import './App.css';
import Component from './Component';

const appointments = ['Comprar Cebola', 'Ir a academia', 'Futebol as 22h'];

const Task = () => {
  return (
    appointments.map((item) => <li> {item} </li>)
  );
}

function App() {
  return (  
    <ol>
      { Task() }
    </ol>
  );
}

export default App;
