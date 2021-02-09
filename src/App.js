import React from 'react';

import './App.scss';
import './styles/utils.scss';
import { Cards } from './components/Cards/Cards';
import { BuyCheepest } from './components/BuyCheepest/BuyCheepest';

function App() {
  return (
    <main className="App">
      <Cards />
      <BuyCheepest />
    </main>
  );
}

export default App;
