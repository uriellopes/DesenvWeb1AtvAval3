// Constantes com os nome das paginas do sistema
const MENU_PAGE_NAME = "menu.html";
const LOGIN_PAGE_NAME = "login.html";
const INDEX_PAGE_NAME = "index.html";

// Função que redireciona para tela de login
function redirectToLogin() {
  window.location.href = `./${LOGIN_PAGE_NAME}`;
}

// Função para redirecionar para a tela de menus
function redirectToMenu() {
  window.location.href = `./${MENU_PAGE_NAME}`;
}
