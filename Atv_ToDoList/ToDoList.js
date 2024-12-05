function cancelarAtv(li) {
    li.remove();
}
function confirmarAtv(li) {
    li.style.color = '#B4B4B8';
    li.style.backgroundColor = "white";
}

const frm = document.querySelector('form');
let atv = 0
frm.addEventListener('submit', (e) =>{
    e.preventDefault();

    let atividade = frm.inAtv.value;
    let prioridade = frm.inPrioridade.value;
    let ul = document.getElementById('ulLista');
    atv++
    let documento = "Atividade " + atv;

    if (atividade == '' && prioridade == '') {
        alert("Insira uma atividade e uma prioridade válida.")
    }else{
        let li = document.createElement('li');
        li.textContent = atividade;
        ul.appendChild(li);

        if (prioridade.toLowerCase() == "alta") {
            li.style.backgroundColor = '#F95454';
        }
        else if (prioridade.toLowerCase() == 'media') {
            li.style.backgroundColor = '#FCF596';
        }
        else if (prioridade.toLowerCase() == 'baixa') {
            li.style.backgroundColor = '#B3C8CF';
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
        
    }
    frm.inAtv.value = '';
    frm.inPrioridade.value = '';
    
})

