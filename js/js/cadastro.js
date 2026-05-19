const formVeiculo = document.getElementById("formVeiculo");

if (formVeiculo) {

  formVeiculo.addEventListener("submit", function (e) {

    e.preventDefault();

    const marca =
      document.getElementById("marca").value.trim();

    const modelo =
      document.getElementById("modelo").value.trim();

    const ano =
      Number(document.getElementById("ano").value);

    const placa =
      document.getElementById("placa")
      .value
      .trim()
      .toUpperCase();

    const quilometragem =
      Number(document.getElementById("quilometragem").value);

    const valorCompra =
      Number(document.getElementById("valorCompra").value);

    const valorVenda =
      Number(document.getElementById("valorVenda").value);

    const status =
      document.getElementById("status").value;

    const descricao =
      document.getElementById("descricao").value.trim();

    const anoAtual = new Date().getFullYear();
    
    if (
      !marca ||
      !modelo ||
      !placa
    ) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    if (ano < 1950 || ano > anoAtual) {
      alert(`O ano deve estar entre 1950 e ${anoAtual}.`);
      return;
    }

    if (valorCompra <= 0 || valorVenda <= 0) {
      alert("Os valores devem ser maiores que zero.");
      return;
    }

    if (valorCompra > valorVenda) {
      alert(
        "O valor de compra não pode ser maior que o valor de venda."
      );
      return;
    }

    if (quilometragem < 0) {
      alert("A quilometragem não pode ser negativa.");
      return;
    }

    if (quilometragem > 1000000) {
      alert(
        "Quilometragem inválida. Informe um valor realista."
      );
      return;
    }

    const regexPlaca =
      /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;

    if (!regexPlaca.test(placa)) {
      alert(
        "Placa inválida. Exemplo válido: ABC1D23"
      );
      return;
    }

    const veiculos = getVeiculos();

    const placaExiste =
      veiculos.some(v => v.placa === placa);

    if (placaExiste) {
      alert(
        "Já existe um veículo cadastrado com essa placa."
      );
      return;
    }

    const veiculo = {
      marca,
      modelo,
      ano,
      placa,
      quilometragem,
      valorCompra,
      valorVenda,
      status,
      descricao
    };

    adicionarVeiculo(veiculo);

    alert("Veículo cadastrado com sucesso!");

    window.location.href = "veiculos.html";

  });

}