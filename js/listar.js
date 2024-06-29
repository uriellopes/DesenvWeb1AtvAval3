const carros = carregaCarros(); // Carrega os carros que já existem cadastrados
const listElement = document.getElementById("lista-carros"); // Elemento onde será mostrada a lista de carros
const formBuscar = document.getElementById("form-buscar"); // Acessar elemento de formulário de buscar carros
const backButton = document.getElementById("back-button"); // Elemento do botão de voltar para tela de menus;
const resetButton = document.getElementById("reset-button"); // Botão para resetar a busca

// Função para limpar o elemento que contém a lista de carros
function limparListaCarros() {
  listElement.innerHTML = "";
}

// Função para renderizar o container da lista de carros
function renderListContainer() {
  const listContainer = document.createElement("div");
  return listContainer;
}

// Função para renderizar o elemento container dos card de carros
function renderListCarrosContainer() {
  const carrosContainer = document.createElement("div");
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

// Função para renderizar o card de um carro
function renderCarroCard(carro) {
  const carroCard = document.createElement("div");
  carroCard.classList.add("carro-card");

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

  carroCard.append(carroCardMarca);
  carroCard.append(carroCardModelo);
  carroCard.append(carroCardAno);
  carroCard.append(carroCardCor);
  carroCard.append(carroCardTipo);
  carroCard.append(carroCardKm);
  carroCard.append(carroCardPortas);
  carroCard.append(carroCardPreco);

  return carroCard;
}

// Função para listar todos os carros cadastrados
function showCarros(carros) {
  if (carros.length === 0) {
    listElement.innerHTML = "Nenhum carro encontrado!";
    return;
  }

  limparListaCarros();

  carros.forEach((carro) => listElement.append(renderCarroCard(carro)));
}

// Função para resetar a listagem de carros
function handleClickReset() {
  showCarros(carros);
}

// Adicionar listener para evento de submit do formulário
formBuscar.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formBuscar);
  const buscar = formData.get("buscar");

  const filteredCarros = carros.filter((carro) => carro.hasAnySame(buscar));

  showCarros(filteredCarros);
});

// Adicionar listener para evento de click nos botões de acordo com a necessidade de cada um
backButton.addEventListener("click", () => redirectToMenu());
resetButton.addEventListener("click", () => handleClickReset());

// Chamar ao iniciar página para mostrar os carros que já existem cadastrados
showCarros(carros);
