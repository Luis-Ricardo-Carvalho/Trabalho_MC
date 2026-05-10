const params = new URLSearchParams(window.location.search);
const index = params.get("id");

const veiculos = getVeiculos();
const veiculo = veiculos[index];

if (veiculo) {

  document.getElementById("tituloVeiculo").textContent =
    `${veiculo.marca} ${veiculo.modelo}`;

  document.getElementById("marca").textContent = veiculo.marca;
  document.getElementById("modelo").textContent = veiculo.modelo;
  document.getElementById("ano").textContent = veiculo.ano;
  document.getElementById("placa").textContent = veiculo.placa;
  document.getElementById("quilometragem").textContent =
    `${veiculo.quilometragem} KM`;

  document.getElementById("valorCompra").textContent =
    `R$ ${Number(veiculo.valorCompra).toLocaleString("pt-BR")}`;

  document.getElementById("valorVenda").textContent =
    `R$ ${Number(veiculo.valorVenda).toLocaleString("pt-BR")}`;

  document.getElementById("descricao").textContent =
    veiculo.descricao || "Sem descrição.";

  document.getElementById("statusVeiculo").innerHTML =
    `<span class="badge-status ${getStatusClass(veiculo.status)}">
      ${veiculo.status}
    </span>`;

  document.getElementById("btnEditar").href =
    `editar-veiculo.html?id=${index}`;

  document.getElementById("btnVenda").href =
    `venda.html?id=${index}`;
}

function getStatusClass(status) {
  if (status === "Disponível") return "status-disponivel";
  if (status === "Reservado") return "status-reservado";
  if (status === "Vendido") return "status-vendido";
}