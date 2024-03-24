import { useState } from "react";
import Contexto from "./Contexto1";
import ComponenteFilho from "./ComponenteFilho1";
import React from "react";

const ComponenteAvo1 = () => {
  let [numero, setNumero] = useState(1)
  let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

  function incrementa() {
    if (numero + 1 > 1025) {
      return
    }
    setNumero((prevContador) => prevContador + 1);
  }

  const descrementa = () => {
    if (numero - 1 <= 0) {
      return
    }
    setNumero((prevContador) => prevContador - 1);
  };

  return (
    <>
      <h1>Componente Avô criado</h1>
      <img src={url} alt="Pokemon"></img>
      <Contexto.Provider value={numero}><ComponenteFilho />
      </Contexto.Provider>
      <button onClick={descrementa}>
        Decrementar número do Pokémon
      </button>
      <button onClick={incrementa}>
        Incrementar número do Pokemón
      </button>
    </>
  )
}

export default ComponenteAvo1