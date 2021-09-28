import React from 'react';
import renderWithRouter from './renderWithRouter';
import { fireEvent } from '@testing-library/react';
import App from './App';

describe('Testa a aplicação inteira', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar a página sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const aboutLink = getByText('Sobre');
    fireEvent.click(aboutLink);

    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');

    const aboutText = getByText('Você está na página Sobre')
    expect(aboutText).toBeInTheDocument();
  });
})