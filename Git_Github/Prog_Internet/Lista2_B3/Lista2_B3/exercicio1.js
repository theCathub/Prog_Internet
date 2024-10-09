const frm = document.querySelector("form");
const resposta = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const num = Number(frm.inNum.value);
    let resp = "";

    if (num%2 == 0) {
        resp = "par";
    }
    else{
        resp = "impar";
    }

    resposta.innerText = `O número é ${resp}`;
})