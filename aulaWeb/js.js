

btn1.addEventListener("click", Testar)

function Testar() {
    var nome = document.getElementById('Nome');
    var idade = document.getElementById('idade').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var nomeEmpresa = document.getElementById('NomeEmpresa').value;
    var cnpj = document.getElementById('cnpj').value;
    var btn1 = document.getElementById("enviar");

    if (nome.value=="") {
        alert('digite seu nome')
    }

    if (!idade) {
        alert('Coloque sua data de nascmento');

    }

    if (email == "") {
        alert('Por favor, digite seu email.');

    }

    if (!cpf) {
        alert('Por favor, digite seu CPF.');
        return;
    }

    if (!nomeEmpresa) {
        alert('Por favor, digite o nome da empresa.');
        return;
    }

    if (!cnpj) {
        alert('Por favor, digite o CNPJ da empresa.');
        return;
    }

    if (!sexo) {
        alert('Por favor, selecione uma opção de sexo.');
        return;
    }

    var sexoSelecionado = sexo.value;
    var sexoOutro = document.getElementById('outroSexo').value.trim();

    if (sexoSelecionado === 'outro' && !sexoOutro) {
        alert('Por favor, especifique seu sexo.');
        return;
    }

}