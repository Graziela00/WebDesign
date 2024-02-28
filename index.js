function calcularIdade() {
    // Obter os valores dos campos
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var anoNascimento = document.getElementById('ano-nascimento').value;

    // Validar se o ano de nascimento é um número
    if (isNaN(anoNascimento) || anoNascimento === "") {
        alert("Por favor, insira um ano de nascimento válido.");
        return;
    }

    // Calcular a idade
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - parseInt(anoNascimento);

    
            // Definir a situação com base na idade
            var situacao;
            if (idade <= 20) {
                situacao = "Novinho";
            } else if (idade <= 40) {
                situacao = "Maduro";
            } else if (idade <= 99) {
                situacao = "Velho";
            } else {
                situacao = "Morto";
            }

          

    // Exibir o resultado
    var resultado = "Olá, " + nome + " " + sobrenome + "! Sua idade é: " + idade + " anos."  + " situaçao: " + situacao;
    document.getElementById('resultado').innerText = resultado;
}
