// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        // Usuário padrão
        const emailCorreto = "tut@gmail.com";
        const senhaCorreta = "123456";

        if (email === emailCorreto && senha === senhaCorreta) {

            localStorage.setItem(
                "usuarioLogado",
                JSON.stringify({
                    email: email
                })
            );

            window.location.href = "dashboard.html";

        } else {
            alert("E-mail ou senha incorretos!");
        }
    });
}


// VERIFICAÇÃO DAS PÁGINAS
const usuario = localStorage.getItem("usuarioLogado");

const paginaAtual = window.location.pathname.split("/").pop();

if (
    !usuario &&
    paginaAtual !== "login.html" &&
    paginaAtual !== "index.html"
) {
    window.location.href = "login.html";
}


// LOGOUT
function sair() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
}