import React from 'react';
import Filho from "./Filho"

const Pai = () => {
  return (
    <div>
      <h2>Componente Pai</h2>
      <Filho altura={1.8} peso={70} />
    </div>
  );
};

export default Pai;
