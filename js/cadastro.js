const formVeiculo = document.getElementById("formVeiculo");

if (formVeiculo) {
  formVeiculo.addEventListener("submit", function (e) {
    e.preventDefault();

    const veiculo = {
      marca: document.getElementById("marca").value.trim(),
      modelo: document.getElementById("modelo").value.trim(),
      ano: document.getElementById("ano").value,
      placa: document.getElementById("placa").value.trim().toUpperCase(),
      quilometragem: document.getElementById("quilometragem").value,
      valorCompra: document.getElementById("valorCompra").value,
      valorVenda: document.getElementById("valorVenda").value,
      status: document.getElementById("status").value,
      descricao: document.getElementById("descricao").value.trim()
    };

    const veiculos = getVeiculos();
    const placaExiste = veiculos.some(v => v.placa === veiculo.placa);

    if (placaExiste) {
      alert("Já existe um veículo cadastrado com essa placa.");
      return;
    }

    adicionarVeiculo(veiculo);
    alert("Veículo cadastrado com sucesso!");
    window.location.href = "veiculos.html";
  });
}