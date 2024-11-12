let estado = document.getElementById("idEstado");
let localidade = document.getElementById("idCidade");
let bairro = document.getElementById("idBairro");
let logradouro = document.getElementById("idRua");

const link = "https://viacep.com.br/ws/" + estado + "/" + localidade + "/" + bairro + "/" + logradouro + "/json"
let lista = link

