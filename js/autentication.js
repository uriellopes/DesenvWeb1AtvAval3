// Constante com o valor da chave do local storage do usuario
const LOCAL_STORAGE_USER_KEY = "user";

// Função para carregar usuário que já está logado no sistema
function carregaUsuario() {
  return localStorage.getItem(LOCAL_STORAGE_USER_KEY);
}

// Função para salvar usuário logado
function salvaUsurio(user) {
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, user);
}

// Função para remover usuário logado
function removeUsuario() {
  localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
}

// Verifica se existe informação do usuário no localStorage
function hasUserLocalStorage() {
  const user = carregaUsuario();
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
    if (lastPath === LOGIN_PAGE_NAME || lastPath === INDEX_PAGE_NAME) {
      redirectToMenu();
    }
  } else {
    if (lastPath !== LOGIN_PAGE_NAME) {
      redirectToLogin();
    }
  }
}

// Chamar de função para checar se usuário está logado ao acessar o sistema
checkIsLogged();
