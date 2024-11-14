document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Por favor, insira uma tarefa!");
        return;
    }
    
    const taskList = document.getElementById('task-list');
    
    // Criando o item da tarefa
    const li = document.createElement('li');
    
    const span = document.createElement('span');
    span.textContent = taskText;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(li));
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
    
    // Limpar o campo de input
    taskInput.value = "";
}

function deleteTask(taskItem) {
    taskItem.remove();
}
