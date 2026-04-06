function getStatusClass(status) {
  if (status === "Disponível") return "status-disponivel";
  if (status === "Reservado") return "status-reservado";
  if (status === "Vendido") return "status-vendido";
  return "";
}

function renderizarVeiculos() {
  const tabela = document.getElementById("tabelaVeiculos");
  const busca = document.getElementById("busca").value.toLowerCase();
  const filtroStatus = document.getElementById("filtroStatus").value;

  let veiculos = getVeiculos();

  veiculos = veiculos.filter(v => {
    const matchBusca =
      v.marca.toLowerCase().includes(busca) ||
      v.modelo.toLowerCase().includes(busca);

    const matchStatus = filtroStatus ? v.status === filtroStatus : true;

    return matchBusca && matchStatus;
  });

  tabela.innerHTML = "";

  if (veiculos.length === 0) {
    tabela.innerHTML = `
      <tr>
        <td colspan="7" class="text-center text-muted py-4">Nenhum veículo encontrado.</td>
      </tr>
    `;
    return;
  }

  veiculos.forEach((v, index) => {
    tabela.innerHTML += `
      <tr>
        <td>${v.marca}</td>
        <td>${v.modelo}</td>
        <td>${v.ano}</td>
        <td>${v.placa}</td>
        <td><span class="badge-status ${getStatusClass(v.status)}">${v.status}</span></td>
        <td>R$ ${Number(v.valorVenda).toLocaleString("pt-BR")}</td>
        <td>
          <button class="btn btn-sm btn-outline-danger" onclick="removerVeiculo(${index})">Excluir</button>
        </td>
      </tr>
    `;
  });
}

function removerVeiculo(index) {
  const confirmar = confirm("Tem certeza que deseja excluir este veículo?");
  if (confirmar) {
    excluirVeiculo(index);
    renderizarVeiculos();
  }
}

renderizarVeiculos();