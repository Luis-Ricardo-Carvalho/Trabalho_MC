const params = new URLSearchParams(window.location.search);
const index = params.get("id");

const veiculos = getVeiculos();

document.getElementById("formVenda")
.addEventListener("submit", function(e){

  e.preventDefault();

  veiculos[index].status = "Vendido";

  salvarVeiculos(veiculos);

  alert("Venda registrada com sucesso!");

  window.location.href = "veiculos.html";

});