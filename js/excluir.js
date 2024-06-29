const carros = carregaCarros(); // Carrega os carros que já existem cadastrados
const listElement = document.getElementById("lista-carros"); // Elemento onde será mostrada a lista de carros

function handleClickExcludeButton(index) {
  carros.splice(index, 1);
  alert("Carro excluido com sucesso!");

  salvarCarros(carros);
  showCarros(carros);
}

// Função para limpar o elemento que contém a lista de carros
function limparListaCarros() {
  listElement.innerHTML = "";
}

// Função para renderizar o container da lista de carros
function renderListContainer() {
  const listContainer = document.createElement("div");
  // listContainer.classList.add("list-container");

  return listContainer;
}

// Função para renderizar o elemento container dos card de carros
function renderListCarrosContainer() {
  const carrosContainer = document.createElement("div");
  // carrosContainer.classList.add("carros-container");

  return carrosContainer;
}

// Função para renderizar cada um dos campos do card de carro
function renderCarroCardText(name, text) {
  const card = document.createElement("div");
  const cardName = document.createElement("b");
  cardName.append(name + ": ");

  card.append(cardName);
  card.append(text);

  return card;
}

// Função que renderiza o botão de excluir um carro
function renderExcludeButton(index) {
  const excludeButton = document.createElement("div");
  excludeButton.addEventListener("click", () =>
    handleClickExcludeButton(index)
  );
  excludeButton.innerHTML = "Excluir";

  return excludeButton;
}

// Função para renderizar o card de um carro
function renderCarroCard(carro, index) {
  const carroCard = document.createElement("div");
  //   carroCard.classList.add("carro-card");

  const carroCardMarca = renderCarroCardText("Marca", carro.marca);
  const carroCardModelo = renderCarroCardText("Modelo", carro.modelo);
  const carroCardAno = renderCarroCardText(
    "Ano de Fabricação",
    carro.anoFabricacao
  );
  const carroCardCor = renderCarroCardText("Cor", carro.cor);
  const carroCardTipo = renderCarroCardText("Tipo", carro.tipo);
  const carroCardKm = renderCarroCardText("Kilometragem", carro.kilometragem);
  const carroCardPortas = renderCarroCardText(
    "Número de Portas",
    carro.numeroPortas
  );
  const carroCardPreco = renderCarroCardText("Preço", carro.preco);

  const excludeButton = renderExcludeButton(index);

  carroCard.append(carroCardMarca);
  carroCard.append(carroCardModelo);
  carroCard.append(carroCardAno);
  carroCard.append(carroCardCor);
  carroCard.append(carroCardTipo);
  carroCard.append(carroCardKm);
  carroCard.append(carroCardPortas);
  carroCard.append(carroCardPreco);
  carroCard.append(excludeButton);

  return carroCard;
}

// Função para listar todos os carros cadastrados
function showCarros(carros) {
  if (carros.length === 0) {
    listElement.innerHTML = "Nenhum carro encontrado!";
    return;
  }

  limparListaCarros();

  const listContainer = renderListContainer();
  const listCarrosContainer = renderListCarrosContainer();

  carros.forEach((carro, index) =>
    listCarrosContainer.append(renderCarroCard(carro, index))
  );

  listContainer.append(listCarrosContainer);
  listElement.append(listContainer);
}

// Chamar ao iniciar página para mostrar os carros que já existem cadastrados
showCarros(carros);
