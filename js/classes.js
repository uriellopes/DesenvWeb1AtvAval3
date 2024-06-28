// Constante com o valor da chave do local storage dos carros salvos
const LOCAL_CARROS_KEY = "carros";

// Classe veiculo
class Veiculo {
  constructor(
    marca,
    modelo,
    anoFabricacao,
    cor,
    tipo,
    kilometragem,
    numeroPortas,
    preco
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoFabricacao = anoFabricacao;
    this.cor = cor;
    this.tipo = tipo;
    this.kilometragem = kilometragem;
    this.numeroPortas = numeroPortas;
    this.preco = preco;
  }

  isSameMarca(carro) {
    return this.marca === carro.marca;
  }

  isSameModelo(carro) {
    return this.modelo === carro.modelo;
  }

  isSameAno(carro) {
    return this.anoFabricacao === carro.anoFabricacao;
  }

  isSameCor(carro) {
    return this.cor === carro.cor;
  }

  isSameTipo(carro) {
    return this.tipo === carro.tipo;
  }

  isSameKm(carro) {
    return this.kilometragem === carro.kilometragem;
  }

  isSamePortas(carro) {
    return this.numeroPortas === carro.numeroPortas;
  }

  isSamePreco(carro) {
    return this.preco === carro.preco;
  }

  isSame(carro) {
    return (
      this.isSameMarca(carro) &&
      this.isSameModelo(carro) &&
      this.isSameAno(carro) &&
      this.isSameCor(carro) &&
      this.isSameTipo(carro) &&
      this.isSameKm(carro) &&
      this.isSamePortas(carro) &&
      this.isSamePreco(carro)
    );
  }
}

// Classe carro que herda a classe veiculo
class Carro extends Veiculo {
  constructor(
    marca,
    modelo,
    anoFabricacao,
    cor,
    tipo,
    kilometragem,
    numeroPortas,
    preco
  ) {
    super(
      marca,
      modelo,
      anoFabricacao,
      cor,
      tipo,
      kilometragem,
      numeroPortas,
      preco
    );
  }
}

// Função para carregar os carros que estão salvos no localStorage
function carregaCarros() {
  const localCarros = localStorage.getItem(LOCAL_CARROS_KEY);
  let parsedLocalCarros = [];
  const carros = [];

  if (localCarros) {
    parsedLocalCarros = JSON.parse(localCarros);
  }

  parsedLocalCarros.forEach((carro) => {
    carros.push(
      new Carro(
        carro.marca,
        carro.modelo,
        carro.anoFabricacao,
        carro.cor,
        carro.tipo,
        carro.kilometragem,
        carro.numeroPortas,
        carro.preco
      )
    );
  });

  return carros;
}

// Função para salvar os carros no localStorage
function salvarCarros(carros) {
  localStorage.setItem(LOCAL_CARROS_KEY, JSON.stringify(carros));
}
