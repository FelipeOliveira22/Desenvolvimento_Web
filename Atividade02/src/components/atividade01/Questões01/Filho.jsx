
const Filho = ({ altura, peso }) => {
  const calcularIMC = (altura, peso) => {
    return peso / (altura * altura);
  };

  const getIMCMensagem = (imc) => {
    if (imc < 18) {
      return <h3>Abaixo do peso</h3>;
    } else if (imc > 25) {
      return <h3>Acima do peso</h3>;
    } else {
      return <h3>Peso ideal</h3>;
    }
  };

  const imc = calcularIMC(altura, peso);

  return (
    <div>
      <h2>Componente Filho</h2>
      <p>IMC: {imc.toFixed(2)}</p>
      {getIMCMensagem(imc)}
    </div>
  );
};

export default Filho;
