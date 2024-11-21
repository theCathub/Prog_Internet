function cancelarAtv(li) {
    li.remove();
}

function confirmarAtv(li) {
    li.style.color = 'green';
}

function limpar() {
    document.getElementById(inAtv).innerText = ''
}

const frm = document.querySelector('form');

frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let atividade = frm.inAtv.value;
    let prioridade = frm.inPrioridade.value;
    let ul = document.getElementById('ulLista');

   

    if (atividade == '' && prioridade == '') {
        alert("Insira uma atividade e uma prioridade válida.")
    }else{
        let li = document.createElement('li');
        li.textContent = atividade;
        ul.appendChild(li);

        if (prioridade.toLowerCase() == "alta") {
            li.style.color = 'red';

        }
        else if (prioridade.toLowerCase() == 'media') {
            li.style.color = 'yellow';
        }
        else if (prioridade.toLowerCase() == 'baixa') {
            li.style.color = 'blue';
        }

        let btnCancelar = document.createElement('button');
        btnCancelar.textContent = 'Cancelar';
        btnCancelar.classList.add('btnCancelar');
        li.appendChild(btnCancelar);
        ul.appendChild(li);

        btnCancelar.addEventListener('click', (e) =>{
            e.preventDefault();
            cancelarAtv(li);
        })

        let btnConfirmar = document.createElement('button');
        btnConfirmar.textContent = 'Confirmar';
        btnConfirmar.classList.add('btnConfirmar');
        li.appendChild(btnConfirmar);
        ul.appendChild(li);

        btnConfirmar.addEventListener('click', (e) =>{
            e.preventDefault();
            confirmarAtv(li);
        })
        atividade.value = '';
        prioridade.value = '';
    }
})