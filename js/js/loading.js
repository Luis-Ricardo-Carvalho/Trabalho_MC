// Marca o momento em que a página começou a carregar
const inicioCarregamento = Date.now();

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    const tempoMinimo = 500; // 0,5 segundos

    const tempoDecorrido = Date.now() - inicioCarregamento;

    const tempoRestante = Math.max(
        tempoMinimo - tempoDecorrido,
        0
    );

    setTimeout(() => {

        loading.classList.add("esconder-loading");

    }, tempoRestante);

});