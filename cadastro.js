const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {

    cadastroForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!cadastroForm.checkValidity()) {

            cadastroForm.reportValidity();

            return;
        }

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        if (senha !== confirmarSenha) {

            alert("As senhas precisam ser iguais.");

            return;
        }

        if (localStorage.getItem("usuario")) {

            alert("Já existe uma conta cadastrada neste navegador.");

            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Cadastro realizado com sucesso! Faça login para acessar o site.");

        window.location.href = "login.html";

    });

}