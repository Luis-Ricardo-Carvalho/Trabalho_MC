const veiculos = getVeiculos();

const totalVeiculos = document.getElementById("totalVeiculos");
const totalDisponiveis = document.getElementById("totalDisponiveis");
const totalReservados = document.getElementById("totalReservados");
const totalVendidos = document.getElementById("totalVendidos");
const tabelaRecentes = document.getElementById("tabelaRecentes");

if (totalVeiculos) {
  totalVeiculos.textContent = veiculos.length;
  totalDisponiveis.textContent = veiculos.filter(v => v.status === "Disponível").length;
  totalReservados.textContent = veiculos.filter(v => v.status === "Reservado").length;
  totalVendidos.textContent = veiculos.filter(v => v.status === "Vendido").length;

  tabelaRecentes.innerHTML = "";

  veiculos.slice(-5).reverse().forEach(v => {
    tabelaRecentes.innerHTML += `
      <tr>
        <td>${v.marca}</td>
        <td>${v.modelo}</td>
        <td>${v.ano}</td>
        <td><span class="badge-status ${getStatusClass(v.status)}">${v.status}</span></td>
        <td>R$ ${Number(v.valorVenda).toLocaleString("pt-BR")}</td>
      </tr>
    `;
  });
}

function getStatusClass(status) {
  if (status === "Disponível") return "status-disponivel";
  if (status === "Reservado") return "status-reservado";
  if (status === "Vendido") return "status-vendido";
  return "";
}