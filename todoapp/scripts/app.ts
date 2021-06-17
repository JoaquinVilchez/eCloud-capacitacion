import { taskInterface } from "./taskInterface"

let errorMessage:HTMLElement = <HTMLInputElement>document.getElementById('error-message')
let successMessage:HTMLElement = <HTMLInputElement>document.getElementById('success-message')
let taskForm:HTMLElement = <HTMLInputElement>document.getElementById('task-form')
let taskInput:HTMLElement = <HTMLInputElement>document.getElementById('task-input')
let submitButton:HTMLElement = <HTMLInputElement>document.getElementById('success-button')
let cards:HTMLElement = <HTMLInputElement>document.getElementById('cards')
let noneTaskCard:HTMLElement = <HTMLInputElement>document.getElementById('none-task-card')
let id:number = 0;
let tasks:taskInterface[] = []; 

errorMessage.classList.add('d-none')
successMessage.classList.add('d-none')
console.log(taskInput.value)

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
        console.log(taskInput.value)
    }
})

submitButton.addEventListener('click', function(e){
        e.preventDefault()
        addTask(taskInput.value)
        console.log(taskInput.value)
})



function validate(value:string):boolean{
    if(value==""){
        showErrorMessage("El campo tareas no puede estar vacío")
        return false;
    }else{
        value=""
        showSuccessMessage('Tarea creada con éxito')
        return true;
    }
}

function showErrorMessage(message:string):void{
    errorMessage.innerHTML = message+" <i class='far fa-times-circle'></i>"
    errorMessage.classList.remove('d-none')
    setTimeout(function(){
        errorMessage.classList.add('d-none')
    },1000)
}

function showSuccessMessage(message:string):void{
    successMessage.innerHTML = message+" <i class='far fa-check-circle'></i>"
    successMessage.classList.remove('d-none')
    setTimeout(function(){
        successMessage.classList.add('d-none')
    },1000)

}

function addTask(data:string):void{
    if(validate(data)){
        id += 1

        let task:taskInterface = {
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
        link.setAttribute('onclick', `deleteTask(${id})`)

        let trashIcon = document.createElement('i')
        trashIcon.classList.add('fas', 'fa-trash')
        link.appendChild(trashIcon)
        cardInnerElement.appendChild(link)

        taskInput.focus()
    }
}

function deleteTask(id:number):void{
    let element:HTMLElement = <HTMLInputElement>document.getElementById('task-'+id)
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
