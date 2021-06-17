import { Task } from "./modules/Task"

//FIXME: Porque me da error cuando le asigno que es un tipo HTMLElement?
let errorMessage:HTMLElement = document.getElementById('error-message')
let successMessage:HTMLElement = document.getElementById('success-message')
let taskForm:HTMLElement = document.getElementById('task-form')
let taskInput:HTMLElement = document.getElementById('task-input')
let submitButton:HTMLElement = document.getElementById('success-button')
let cards:HTMLElement = document.getElementById('cards')
let noneTaskCard:HTMLElement = document.getElementById('none-task-card')
let id = 0;
let tasks:Task[] = [];

/////////////
//Ejecucion

errorMessage.classList.add('d-none')
successMessage.classList.add('d-none')

taskInput.addEventListener('keypress', function(e){
    let keyCode = e.keyCode;
    if(keyCode==13){
        e.preventDefault()
        let task = new Task(taskInput.value)
        task.addTask()
    }
})

submitButton.addEventListener('click', function(e){
        e.preventDefault()
        Task.addTask(taskInput.value)
})

/////////////
//Funciones

function checkTaskCount(){
    if(tasks.length==0){
        noneTaskCard.classList.remove('d-none')
    }else{
        noneTaskCard.classList.add('d-none')
    }
}

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