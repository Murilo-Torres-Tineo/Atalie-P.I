const botaoTeste = document.getElementById("botaoTeste");
const videoStage = document.getElementById("videoStage");
const loginVideo = document.getElementById("loginVideo");


botaoTeste.addEventListener("click", function () {

    console.log("Botão clicado.");

    videoStage.classList.remove("hidden");
    botaoTeste.classList.add("hidden");

    loginVideo.currentTime = 0;

    loginVideo.play()
        .then(function () {

            console.log("Vídeo iniciado com sucesso.");

        })
        .catch(function (erro) {

            console.error("Erro ao reproduzir o vídeo:", erro);

        });

});


loginVideo.addEventListener("ended", function () {

    console.log("Vídeo terminou.");

    videoStage.classList.add("hidden");
    botaoTeste.classList.remove("hidden");

});


loginVideo.addEventListener("error", function () {

    console.error("Erro ao carregar o vídeo.");

});