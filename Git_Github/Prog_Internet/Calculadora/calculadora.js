function inserir(caracter){ 
    // Pega os elementos já armazenados no paragrafo por meio do id
    let entrada = document.getElementById("resultado").innerHTML
    // Adiciona o caracter escolhido ao paragrafo
    document.getElementById("resultado").innerHTML = entrada + caracter
}

function calcular(){
    // Pega os elementos inseridos no paragrafo
    let resultado = document.getElementById("resultado").innerHTML
    // Verifica se o paragrafo está vazio
    if (resultado) {
        // Insere o resultado do cálculo no paragrafo
        document.getElementById("resultado").innerHTML = eval(resultado) // A função eval analisa uma String e, neste caso, retorna o resultado do cálculo inserido
    }else{
        // Insere um elemento para identificar que não foi possível realizar o cáculo por não ter elementos
        document.getElementById("resultado").innerHTML = "..."
    }
}

function raiz() {
    // Pega os elementos inseridos no paragrafo
    let resultado = document.getElementById("resultado").innerHTML
    // Insere o resultado da raiz quadrado
    document.getElementById("resultado").innerHTML = Math.sqrt(resultado)
}

function limpar(){
    // Substitui os elementos do paragrafo por uma String vazia
    document.getElementById("resultado").innerHTML = ""
}