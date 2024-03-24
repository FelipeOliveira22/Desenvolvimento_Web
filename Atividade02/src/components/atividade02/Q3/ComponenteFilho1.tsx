import Contexto from "./Contexto1"
import React, { useContext } from 'react';
import ComponenteNeto from "./ComponenteNeto1"

const ComponenteFilho1 = () => {
  let numero = useContext(Contexto) + 1
  let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + numero + '.png'

  return (
    <>
      <h1>Componente Filho</h1>
      <img src={url} alt="Pokemon"></img>
      <ComponenteNeto />
    </>
  )
}

export default ComponenteFilho1