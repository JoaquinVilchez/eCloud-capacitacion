System.register(["./modules/Task"], function (exports_1, context_1) {
    "use strict";
    var Task_1, errorMessage, successMessage, taskForm, taskInput, submitButton, cards, noneTaskCard, id, tasks;
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
    return {
        setters: [
            function (Task_1_1) {
                Task_1 = Task_1_1;
            }
        ],
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
                    let task = new Task_1.Task(taskInput.value);
                    task.addTask();
                }
            });
            submitButton.addEventListener('click', function (e) {
                e.preventDefault();
                Task_1.Task.addTask(taskInput.value);
            });
        }
    };
});
