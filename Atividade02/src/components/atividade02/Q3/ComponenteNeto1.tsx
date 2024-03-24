import Contexto from "./Contexto1"
import React, { useContext } from 'react';

const ComponenteNeto1 = () => {
  let numero = useContext(Contexto) + 2
  let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'
  return (
    <>
      <h1>Componente Neto criado</h1>
      <img src={url} alt="Pokemon"></img>
    </>
  )
}

export default ComponenteNeto1