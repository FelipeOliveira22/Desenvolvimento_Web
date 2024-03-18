import React from 'react';
import pokemon1 from './Imagens/pokemon1.png'; 
import pokemon4 from './Imagens/pokemon4.png'; 

function Hero(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
    </div>
  );
}

function Enemy(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
    </div>
  );
}

function Arena() {
  return (
    <div>
      <Hero name="Bulbausar" img={pokemon1} />
      <h1>X</h1>
      <br/>
      <Enemy name="Charmander" img={pokemon4} />
    </div>
  );
}

function World(props) {
  return <div>{props.children}</div>;
}

export { Arena, World };
