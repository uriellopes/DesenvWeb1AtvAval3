// Constantes com os nome das paginas do sistema
const CADASTRAR_PAGE_NAME = "cadastrar.html";
const EXCLUIR_PAGE_NAME = "excluir.html";
const INDEX_PAGE_NAME = "index.html";
const LISTAR_PAGE_NAME = "listar.html";
const LOGIN_PAGE_NAME = "login.html";
const MENU_PAGE_NAME = "menu.html";

// Função que redireciona para tela de cadastrar
function redirectToCadastrar() {
  window.location.href = `./${CADASTRAR_PAGE_NAME}`;
}

// Função que redireciona para tela de excluir
function redirectToExcluir() {
  window.location.href = `./${EXCLUIR_PAGE_NAME}`;
}

// Função que redireciona para tela inicial
function redirectToIndex() {
  window.location.href = `./${INDEX_PAGE_NAME}`;
}

// Função que redireciona para tela de listar
function redirectToListar() {
  window.location.href = `./${LISTAR_PAGE_NAME}`;
}

// Função que redireciona para tela de login
function redirectToLogin() {
  window.location.href = `./${LOGIN_PAGE_NAME}`;
}

// Função para redirecionar para a tela de menus
function redirectToMenu() {
  window.location.href = `./${MENU_PAGE_NAME}`;
}
