const loginForm = document.getElementById("loginForm");

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
            alert("Nenhuma conta cadastrada. Crie uma conta primeiro.");
            return;
        }

        const usuario = JSON.parse(usuarioSalvo);

        if (email !== usuario.email || senha !== usuario.senha) {
            alert("E-mail ou senha incorretos.");
            return;
        }

        localStorage.setItem("logado", "true");
        localStorage.setItem("usuarioNome", usuario.nome);

        localStorage.setItem("mostrarVideo", "true");

        console.log("Login realizado!");
        console.log("Vídeo será exibido no index.");

        window.location.href = "index.html";

    });

}