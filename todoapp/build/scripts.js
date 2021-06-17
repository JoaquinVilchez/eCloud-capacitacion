System.register([], function (exports_1, context_1) {
    "use strict";
    var errorMessage, successMessage, taskForm, taskInput, submitButton, cards, noneTaskCard, id, tasks;
    var __moduleName = context_1 && context_1.id;
    /////////////
    //Funciones
    function checkTaskCount() {
        if (tasks.length == 0) {
            noneTaskCard.classList.remove('d-none');
        }
        else {
            noneTaskCard.classList.add('d-none');
        }
    }
    function validate(value) {
        if (value == "") {
            showErrorMessage("El campo tareas no puede estar vacío");
            return false;
        }
        else {
            value = "";
            showSuccessMessage('Tarea creada con éxito');
            return true;
        }
    }
    function showErrorMessage(message) {
        errorMessage.innerHTML = message + " <i class='far fa-times-circle'></i>";
        errorMessage.classList.remove('d-none');
        setTimeout(function () {
            errorMessage.classList.add('d-none');
        }, 1000);
    }
    function showSuccessMessage(message) {
        successMessage.innerHTML = message + " <i class='far fa-check-circle'></i>";
        successMessage.classList.remove('d-none');
        setTimeout(function () {
            successMessage.classList.add('d-none');
        }, 1000);
    }
    function addTask(data) {
        let validation = validate(data);
        if (validation) {
            id += 1;
            task = {
                id: id,
                text: data
            };
            tasks.push(task);
            taskInput.value = "";
            checkTaskCount();
            let cardElement = document.createElement('div');
            cardElement.classList.add('card', 'my-2');
            cardElement.setAttribute('id', 'task-' + id);
            cards.appendChild(cardElement);
            let cardInnerElement = document.createElement('div');
            cardInnerElement.classList.add('task-card', 'card-body', 'd-flex', 'align-items-center', 'justify-content-between');
            cardElement.appendChild(cardInnerElement);
            let cardInnerTextElement = document.createElement('p');
            cardInnerElement.appendChild(cardInnerTextElement);
            cardInnerTextElement.appendChild(document.createTextNode(data));
            let link = document.createElement('a');
            link.href = '#';
            link.setAttribute('onclick', 'deleteTask(' + id + ')');
            let trashIcon = document.createElement('i');
            trashIcon.classList.add('fas', 'fa-trash');
            link.appendChild(trashIcon);
            cardInnerElement.appendChild(link);
            taskInput.focus();
        }
    }
    function deleteTask(id) {
        let element = document.getElementById('task-' + id);
        element.remove();
        for (var i = 0; i < tasks.length; i++) {
            var obj = tasks[i];
            if (obj.id == id) {
                let position = tasks.indexOf(obj);
                tasks.splice(position, 1);
            }
        }
    }
    return {
        setters: [],
        execute: function () {
            //FIXME: Porque me da error cuando le asigno que es un tipo HTMLElement?
            errorMessage = document.getElementById('error-message');
            successMessage = document.getElementById('success-message');
            taskForm = document.getElementById('task-form');
            taskInput = document.getElementById('task-input');
            submitButton = document.getElementById('success-button');
            cards = document.getElementById('cards');
            noneTaskCard = document.getElementById('none-task-card');
            id = 0;
            tasks = [];
            /////////////
            //Ejecucion
            errorMessage.classList.add('d-none');
            successMessage.classList.add('d-none');
            taskInput.addEventListener('keypress', function (e) {
                let keyCode = e.keyCode;
                if (keyCode == 13) {
                    e.preventDefault();
                    addTask(taskInput.value);
                }
            });
            submitButton.addEventListener('click', function (e) {
                e.preventDefault();
                addTask(taskInput.value);
            });
            showSuccessMessage('Tarea eliminada con éxito');
            checkTaskCount();
        }
    };
});
