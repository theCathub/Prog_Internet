const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nota1 = Number(frm.inNum1.value);
    const nota2 = Number(frm.inNum2.value);
    const nota3 = Number(frm.inNum3.value);
    
    let media = (nota1 + nota2 + nota3)/3;
    let situacao = "";
    if (media >= 7){
        situacao = "Aprovado";
    }
    if (media <= 6.9 && media >= 4){
        situacao = "Recuperação";
    }
    if (media < 3.9) {
        situacao = "Reprovado";
    }
    resp.innerText = `${situacao} - Sua média é ${media}`;

})