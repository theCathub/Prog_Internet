const frm = document.querySelector("form");
const resposta = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const idade = Number(frm.inIdade.value);
    
    if (idade < 18) {
        resposta.innerText = "Você é menor de idade";
    }
    else{
        resposta.innerText = "Você é maior de idade";
    }
})