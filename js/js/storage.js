function getVeiculos() {
  return JSON.parse(localStorage.getItem("veiculos")) || [];
}

function salvarVeiculos(lista) {
  localStorage.setItem("veiculos", JSON.stringify(lista));
}

function adicionarVeiculo(veiculo) {
  const veiculos = getVeiculos();
  veiculos.push(veiculo);
  salvarVeiculos(veiculos);
}

function excluirVeiculo(index) {
  const veiculos = getVeiculos();
  veiculos.splice(index, 1);
  salvarVeiculos(veiculos);
}