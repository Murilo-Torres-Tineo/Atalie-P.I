const videoStage = document.getElementById("videoStage");
const loginVideo = document.getElementById("loginVideo");

const mostrarVideo = localStorage.getItem("mostrarVideo");

console.log("mostrarVideo:", mostrarVideo);

if (mostrarVideo === "true") {

    localStorage.removeItem("mostrarVideo");

    videoStage.classList.remove("hidden");

    loginVideo.currentTime = 0;

    loginVideo.play()
        .then(function () {

            console.log("Vídeo iniciado com sucesso.");

        })
        .catch(function (erro) {

            console.error("Erro ao reproduzir o vídeo:", erro);

            videoStage.classList.add("hidden");

        });

    loginVideo.addEventListener("ended", function () {

        console.log("Vídeo terminou.");

        videoStage.classList.add("hidden");

    });

    loginVideo.addEventListener("error", function () {

        console.error("Erro ao carregar o vídeo.");

        videoStage.classList.add("hidden");

    });

}