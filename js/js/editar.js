const params = new URLSearchParams(window.location.search);

const index = params.get("id");

const veiculos = getVeiculos();

const veiculo = veiculos[index];

document.getElementById("marca").value =
  veiculo.marca;

document.getElementById("modelo").value =
  veiculo.modelo;

document.getElementById("ano").value =
  veiculo.ano;

document.getElementById("placa").value =
  veiculo.placa;

document.getElementById("status").value =
  veiculo.status;

document.getElementById("quilometragem").value =
  veiculo.quilometragem;

document.getElementById("valorCompra").value =
  veiculo.valorCompra;

document.getElementById("valorVenda").value =
  veiculo.valorVenda;

document.getElementById("descricao").value =
  veiculo.descricao || "";

document.getElementById("formEditar")
.addEventListener("submit", function(e){

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

  const status =
    document.getElementById("status").value;

  const quilometragem =
    Number(document.getElementById("quilometragem").value);

  const valorCompra =
    Number(document.getElementById("valorCompra").value);

  const valorVenda =
    Number(document.getElementById("valorVenda").value);

  const descricao =
    document.getElementById("descricao").value.trim();

  const anoAtual =
    new Date().getFullYear();

  if (
    !marca ||
    !modelo ||
    !placa
  ) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  if (ano < 1950 || ano > anoAtual) {

    alert(
      `O ano deve estar entre 1950 e ${anoAtual}.`
    );

    return;
  }

  if (
    valorCompra <= 0 ||
    valorVenda <= 0
  ) {

    alert(
      "Os valores devem ser maiores que zero."
    );

    return;
  }

  if (valorCompra > valorVenda) {

    alert(
      "O valor de compra não pode ser maior que o valor de venda."
    );

    return;
  }

  if (quilometragem < 0) {

    alert(
      "A quilometragem não pode ser negativa."
    );

    return;
  }

  if (quilometragem > 1000000) {

    alert(
      "Informe uma quilometragem válida."
    );

    return;
  }

  const regexPlaca =
    /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;

  if (!regexPlaca.test(placa)) {

    alert(
      "Placa inválida. Exemplo: ABC1D23"
    );

    return;
  }

  const placaDuplicada =
    veiculos.some((v, i) =>
      i != index &&
      v.placa === placa
    );

  if (placaDuplicada) {

    alert(
      "Já existe outro veículo com essa placa."
    );

    return;
  }

  veiculo.marca = marca;
  veiculo.modelo = modelo;
  veiculo.ano = ano;
  veiculo.placa = placa;
  veiculo.status = status;
  veiculo.quilometragem = quilometragem;
  veiculo.valorCompra = valorCompra;
  veiculo.valorVenda = valorVenda;
  veiculo.descricao = descricao;

  salvarVeiculos(veiculos);

  alert("Veículo atualizado com sucesso!");

  window.location.href = "veiculos.html";

});