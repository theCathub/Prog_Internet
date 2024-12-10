import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBPEgvnQs9HUG7jHQd-us8g8vGTHv9S4iI",
    authDomain: "atvtodolist.firebaseapp.com",
    projectId: "atvtodolist",
    storageBucket: "atvtodolist.firebasestorage.app",
    messagingSenderId: "176184367581",
    appId: "1:176184367581:web:7838b7dfb5d6bf63e93e34",
    measurementId: "G-R1GDGT5X4K"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// -------------------------------------------------------------------------------------------------------

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

    // Variáveis
    let atividade = frm.inAtv.value;
    let prioridade = frm.inPrioridade.value;
    let ul = document.getElementById('ulLista');
    atv++
    let documento = "Atividade " + atv;

    // Análise da prioridade
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

        // Botão para cancelar a atividade
        let btnCancelar = document.createElement('button');
        btnCancelar.textContent = 'Cancelar';
        btnCancelar.classList.add('btnCancelar');
        li.appendChild(btnCancelar);
        ul.appendChild(li);
        btnCancelar.addEventListener('click', (e) =>{
            e.preventDefault();
            cancelarAtv(li);
        })

        // Botão para marcar a atividade como concluída
        let btnConfirmar = document.createElement('button');
        btnConfirmar.textContent = 'Confirmar';
        btnConfirmar.classList.add('btnConfirmar');
        li.appendChild(btnConfirmar);
        ul.appendChild(li);
        btnConfirmar.addEventListener('click', (e) =>{
            e.preventDefault();
            confirmarAtv(li);
        })

        // Adicionar dados no Firebase
        
        
    }
    // Limpa os inputs
    frm.inAtv.value = '';
    frm.inPrioridade.value = '';
})