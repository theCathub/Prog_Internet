const frm = document.querySelector("form");
const resposta =  document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const lado1 = Number(frm.inLado1.value);
    const lado2 = Number(frm.inLado2.value);
    const lado3 = Number(frm.inLado3.value);

    let triangulo = "";

    if (lado1 + lado2 > lado3){
        if (lado1 == lado2 && lado2 == lado3) {
            triangulo = "equilátero";
        }
        if (lado1 != lado2 && lado2 != lado3) {
            triangulo = "escaleno";
        }
        if (lado1 == lado2 && lado1 != lado3 || lado2 == lado3 && lado2 != lado1 || lado1 == lado3 && lado2 != lado1) {
            triangulo = "isósceles";
        }
        resposta.innerText = `É um triângulo ${triangulo}`;
    }
    else{
        resposta.innerText = "O triângulo é inválido!";
    }

})