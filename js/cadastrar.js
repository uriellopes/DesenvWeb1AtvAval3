// Acessar elemento de formulário de cadastrar carros
const formCadastrar = document.getElementById("form-cadastrar");

// Adicionar listener para evento de submit do formulário
formCadastrar.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formCadastrar);
  const marca = formData.get("marca");
  const modelo = formData.get("modelo");
  const anoFabricacao = formData.get("anoFabricacao");
  const cor = formData.get("cor");
  const tipo = formData.get("tipo");
  const kilometragem = formData.get("kilometragem");
  const numeroPortas = formData.get("numeroPortas");
  const preco = formData.get("preco");

  const novoCarro = new Carro(
    marca,
    modelo,
    anoFabricacao,
    cor,
    tipo,
    kilometragem,
    numeroPortas,
    preco
  );

  const carros = carregaCarros();

  if (carros.length > 0 && carros.some((carro) => carro.isSame(novoCarro))) {
    alert("O carro não pode ser cadastrado pois já existe!");
  } else {
    carros.push(novoCarro);
    salvarCarros(carros);
    alert("Carro cadastrado com sucesso!");
  }
});
