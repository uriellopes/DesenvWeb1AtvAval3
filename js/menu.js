// Selecionar elemento de botões na tela de menu
const cadastrarButton = document.getElementById("cadastrar-button");
const listarButton = document.getElementById("listar-button");
const excluirButton = document.getElementById("excluir-button");
const logoutButton = document.getElementById("logout-button");

// Adicionar listeners de eventos especificos de cada botão
cadastrarButton.addEventListener("click", () => redirectToCadastrar());
listarButton.addEventListener("click", () => redirectToListar());
excluirButton.addEventListener("click", () => redirectToExcluir());
logoutButton.addEventListener("click", () => {
  removeUsuario();
  redirectToLogin();
});
