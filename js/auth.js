const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (email && senha) {
      localStorage.setItem("usuarioLogado", JSON.stringify({ email }));
      window.location.href = "dashboard.html";
    } else {
      alert("Preencha e-mail e senha.");
    }
  });
}