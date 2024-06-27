// Função para verificar se login e senha estão corretos
function login(user, password) {
  return user === "admin" && password === "admin";
}

// Acessar elemento de formulário de login
const loginForm = document.getElementById("login-form");

// Adicionar listener para evento de submit do formulário
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const user = formData.get("user");
  const password = formData.get("password");

  if (login(user, password)) {
    localStorage.setItem("user", user);
    redirectToMenu();
  } else {
    alert("Usuário ou Senha incorretos!");
  }
});
