const frm = document.querySelector("form");
const resposta = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const altura = Number(frm.inAltura.value);
    const peso = Number(frm.inPeso.value);

    const imc = peso / altura**2;

    if (imc < 18.5) {
        resposta.innerText = "Abaixo do peso normal";
    }
    if (imc >= 18.5 && imc <= 24.9){
        resposta.innerText = "Peso normal";
    }
    if (imc >= 25 && imc <= 29.9) {
        resposta.innerText = "Excesso de peso";
    }
    if (imc > 30) {
        resposta.innerText = "Obesidade";
    }
})