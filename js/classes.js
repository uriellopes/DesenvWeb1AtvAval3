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

  isSameMarca(marca) {
    return this.marca === marca;
  }

  isSameModelo(modelo) {
    return this.modelo === modelo;
  }

  isSameAno(anoFabricacao) {
    return this.anoFabricacao === anoFabricacao;
  }

  isSameCor(cor) {
    return this.cor === cor;
  }

  isSameTipo(tipo) {
    return this.tipo === tipo;
  }

  isSameKm(kilometragem) {
    return this.kilometragem === kilometragem;
  }

  isSamePortas(numeroPortas) {
    return this.numeroPortas === numeroPortas;
  }

  isSamePreco(preco) {
    return this.preco === preco;
  }

  isSame(carro) {
    return (
      this.isSameMarca(carro.marca) &&
      this.isSameModelo(carro.modelo) &&
      this.isSameAno(carro.anoFabricacao) &&
      this.isSameCor(carro.cor) &&
      this.isSameTipo(carro.tipo) &&
      this.isSameKm(carro.kilometragem) &&
      this.isSamePortas(carro.numeroPortas) &&
      this.isSamePreco(carro.preco)
    );
  }

  hasAnySame(value) {
    return (
      this.isSameMarca(value) ||
      this.isSameModelo(value) ||
      this.isSameAno(value) ||
      this.isSameCor(value) ||
      this.isSameTipo(value) ||
      this.isSameKm(value) ||
      this.isSamePortas(value) ||
      this.isSamePreco(value)
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
