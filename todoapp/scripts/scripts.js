let errorMessage = document.getElementById('error-message')
let successMessage = document.getElementById('success-message')
let taskForm = document.getElementById('task-form')
let taskInput = document.getElementById('task-input')
let submitButton = document.getElementById('success-button')
let cards = document.getElementById('cards')
let noneTaskCard = document.getElementById('none-task-card')
let id = 0;
let tasks = [];

errorMessage.classList.add('d-none')
successMessage.classList.add('d-none')

function checkTaskCount(){
    if(tasks.length==0){
        noneTaskCard.classList.remove('d-none')
    }else{
        noneTaskCard.classList.add('d-none')
    }
}

taskInput.addEventListener('keypress', function(e){
    let keyCode = e.keyCode;
    if(keyCode==13){
        e.preventDefault()
        addTask(taskInput.value)
    }
})

submitButton.addEventListener('click', function(e){
        e.preventDefault()
        addTask(taskInput.value)
})



function validate(value){
    if(value==""){
        showErrorMessage("El campo tareas no puede estar vacío")
        return false;
    }else{
        value=""
        showSuccessMessage('Tarea creada con éxito')
        return true;
    }
}

function showErrorMessage(message){
    errorMessage.innerHTML = message+" <i class='far fa-times-circle'></i>"
    errorMessage.classList.remove('d-none')
    setTimeout(function(){
        errorMessage.classList.add('d-none')
    },1000)
}

function showSuccessMessage(message){
    successMessage.innerHTML = message+" <i class='far fa-check-circle'></i>"
    successMessage.classList.remove('d-none')
    setTimeout(function(){
        successMessage.classList.add('d-none')
    },1000)

}

function addTask(data){
    let validation = validate(data)
    if(validation){
        id += 1

        task = {
            id: id,
            text: data
        }

        tasks.push(task)

        taskInput.value=""
        checkTaskCount()

        let cardElement = document.createElement('div')
        cardElement.classList.add('card', 'my-2')
        cardElement.setAttribute('id', 'task-'+id);
        cards.appendChild(cardElement)

        let cardInnerElement = document.createElement('div')
        cardInnerElement.classList.add('task-card', 'card-body', 'd-flex', 'align-items-center', 'justify-content-between')
        cardElement.appendChild(cardInnerElement)

        let cardInnerTextElement = document.createElement('p')
        cardInnerElement.appendChild(cardInnerTextElement)
        cardInnerTextElement.appendChild(document.createTextNode(data))

        let link = document.createElement('a')
        link.href = '#'
        link.setAttribute('onclick', 'deleteTask('+id+')')

        let trashIcon = document.createElement('i')
        trashIcon.classList.add('fas', 'fa-trash')
        link.appendChild(trashIcon)
        cardInnerElement.appendChild(link)
    }
}

function deleteTask(id){
    let element = document.getElementById('task-'+id)
    element.remove()
    
    for (var i = 0; i < tasks.length; i++) {
        var obj = tasks[i]
        if(obj.id==id){
            let position = tasks.indexOf(obj)
            tasks.splice(position,1)
        }
    }
    
    showSuccessMessage('Tarea eliminada con éxito')
    checkTaskCount()
}