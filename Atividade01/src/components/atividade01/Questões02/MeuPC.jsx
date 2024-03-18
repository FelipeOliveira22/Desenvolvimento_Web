const PlacaMae = ({ nome, preco }) => {
  return (
    <div>
      <h3>Placa-Mãe</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
};

const Memoria = ({ nome, preco }) => {
  return (
    <div>
      <h3>Memória</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
};

const PlacaDeVideo = ({ nome, preco }) => {
  return (
    <div>
      <h3>Placa de Vídeo</h3>
      <p>Nome: {nome}</p>
      <p>Preço: R$ {preco}</p>
    </div>
  );
};

export { PlacaMae, Memoria, PlacaDeVideo };
