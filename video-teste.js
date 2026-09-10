const loginForm = document.getElementById("loginForm");
const loginAviso = document.getElementById("loginAviso");

function mostrarAvisoLogin(mensagem) {

    loginAviso.textContent = mensagem;
    loginAviso.className = "form-notice form-notice--erro";
    loginAviso.hidden = false;

}

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!loginForm.checkValidity()) {
            loginForm.reportValidity();
            return;
        }

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;

        const usuarioSalvo = localStorage.getItem("usuario");

        if (!usuarioSalvo) {
            mostrarAvisoLogin("Nenhuma conta cadastrada. Crie uma conta primeiro.");
            return;
        }

        const usuario = JSON.parse(usuarioSalvo);

        if (email !== usuario.email || senha !== usuario.senha) {
            mostrarAvisoLogin("E-mail ou senha incorretos.");
            return;
        }

        localStorage.setItem("logado", "true");
        localStorage.setItem("usuarioNome", usuario.nome);

        localStorage.setItem("mostrarVideo", "true");

        console.log("Login realizado!");
        console.log("Vídeo será exibido no index.");

        window.location.href = "home.html";

    });

}
