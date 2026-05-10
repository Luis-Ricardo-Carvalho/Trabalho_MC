const usuario =
  JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuario) {
  window.location.href = "login.html";
}

const nomeUsuario =
  usuario.nome || usuario.email.split("@")[0];

const emailUsuario =
  usuario.email;

document.getElementById("nomeUsuario").textContent =
  nomeUsuario;

document.getElementById("inputNome").value =
  nomeUsuario;

document.getElementById("inputEmail").value =
  emailUsuario;

document.getElementById("avatar").src =
  `https://ui-avatars.com/api/?name=${encodeURIComponent(nomeUsuario)}&background=ff6b00&color=fff&size=128`;

document.getElementById("formPerfil")
.addEventListener("submit", function(e){

  e.preventDefault();

  const novoNome =
    document.getElementById("inputNome")
    .value
    .trim();

  const novoEmail =
    document.getElementById("inputEmail")
    .value
    .trim();

  if (!novoNome || !novoEmail) {

    alert("Preencha todos os campos.");

    return;
  }

  const novoUsuario = {
    nome: novoNome,
    email: novoEmail
  };

  localStorage.setItem(
    "usuarioLogado",
    JSON.stringify(novoUsuario)
  );

  alert("Perfil atualizado com sucesso!");

  location.reload();

});