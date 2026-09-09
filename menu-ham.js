function abrirMenu() {
    const botao = document.querySelector(".menu-hamburguer");
    const menu = document.querySelector(".menu");

    botao.classList.toggle("aberto");
    menu.classList.toggle("aberto");
}