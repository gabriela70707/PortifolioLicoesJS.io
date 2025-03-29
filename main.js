// Seleciona a tela de carregamento
const loadingScreen = document.getElementById("loading-screen");

// Adiciona eventos aos links
document.querySelectorAll(".link-lista").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o redirecionamento imediato

        const href = link.getAttribute("data-link"); // Obtém o link do atributo "data-link"

        // Exibe a tela de carregamento
        loadingScreen.style.display = "flex";

        // Aguarda 4 segundos antes de redirecionar
        setTimeout(() => {
            window.location.href = href; // Redireciona para o link
        }, 1500);
    });
});
