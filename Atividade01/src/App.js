//1) import Pai from './components/atividade01/Questões01/Pai';
//  <Pai />


//2) import { PlacaMae, Memoria, PlacaDeVideo } from './components/atividade01/Questões02/MeuPC';

/*
  <PlacaMae nome="ASUS Prime B450M" preco={450} />
  <Memoria nome="Corsair Vengeance LPX 16GB" preco={300} />
  <PlacaDeVideo nome="NVIDIA GeForce RTX 3060 Ti" preco={2500} />
*/

import React from 'react';
import { Arena, World } from './components/atividade01/Questões03/Batalha';

function App() {
  return (
    <div>
      <h1>Luta Iniciada! </h1>
      <br/>
    <World>
      <Arena />
    </World>
    </div>
  );
}

export default App;


