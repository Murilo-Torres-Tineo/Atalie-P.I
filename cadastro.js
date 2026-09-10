const cadastroForm = document.getElementById("cadastroForm");
const cadastroAviso = document.getElementById("cadastroAviso");

function mostrarAvisoCadastro(mensagem, tipo = "erro") {

    cadastroAviso.textContent = mensagem;
    cadastroAviso.className = `form-notice form-notice--${tipo}`;
    cadastroAviso.hidden = false;

}

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

            mostrarAvisoCadastro("As senhas precisam ser iguais.");

            return;
        }

        if (localStorage.getItem("usuario")) {

            mostrarAvisoCadastro("Já existe uma conta cadastrada neste navegador.");

            return;
        }

        const usuario = {
            nome: nome,
            email: email,
            telefone: telefone,
            senha: senha
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        mostrarAvisoCadastro("Cadastro realizado com sucesso! Redirecionando para o login...", "sucesso");

        window.setTimeout(function () {
            window.location.href = "login.html";
        }, 1500);

    });

}
