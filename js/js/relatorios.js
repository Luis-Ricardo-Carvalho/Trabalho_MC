const veiculos = getVeiculos();

const vendidos =
  veiculos.filter(v => v.status === "Vendido").length;

document.getElementById("totalVendidos").textContent =
  vendidos;

let lucro = 0;

veiculos.forEach(v => {
  lucro += Number(v.valorVenda) - Number(v.valorCompra);
});

document.getElementById("lucroEstimado").textContent =
  `R$ ${lucro.toLocaleString("pt-BR")}`;

const disponiveis =
  veiculos.filter(v => v.status === "Disponível").length;

const reservados =
  veiculos.filter(v => v.status === "Reservado").length;

new Chart(document.getElementById("graficoStatus"), {
  type: "doughnut",

  data: {
    labels: ["Disponíveis", "Reservados", "Vendidos"],

    datasets: [{
      data: [
        disponiveis,
        reservados,
        vendidos
      ]
    }]
  }
});