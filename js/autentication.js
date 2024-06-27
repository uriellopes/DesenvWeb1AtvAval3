// Função que redireciona para tela de login
function redirectToLogin() {
  window.location.href = "./login.html";
}

// Função para redirecionar para a tela de menus
function redirectToMenu() {
  window.location.href = "./menu.html";
}

// Verifica se existe informação do usuário no localStorage
function hasUserLocalStorage() {
  const user = localStorage.getItem("user");
  if (!user) {
    return false;
  } else {
    return true;
  }
}

// Função para verificar se usuário já está logado no sistema
function checkIsLogged() {
  const paths = window.location.href.split("/");
  const lastPath = paths.pop();

  if (hasUserLocalStorage()) {
    if (lastPath === "login.html" || lastPath === "index.html") {
      redirectToMenu();
    }
  } else {
    if (lastPath !== "login.html") {
      redirectToLogin();
    }
  }
}

checkIsLogged();
