function coletarInfo() {
    let cep = document.getElementById('inCEP')
    const link  = `https://viacep.com.br/ws/${cep}/xml/`

     // Faz a requisição à API ViaCEP
    fetch(link)
    .then(data => {
        document.getElementById("logradouro").value = 'Rua: ' + data.logradouro;
        document.getElementById("bairro").value = 'Bairro: ' + data.bairro;
        document.getElementById("cidade").value = 'Cidade: ' + data.localidade;
        document.getElementById("estado").value = 'Estado: ' + data.estado;
    })

}