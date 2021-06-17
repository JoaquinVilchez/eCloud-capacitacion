System.register([], function (exports_1, context_1) {
    "use strict";
    var Task;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Task = class Task {
                constructor(title) {
                    this.id = this.id + 1; //FIXME: Esta bien esto?
                    this.title = title;
                }
                addTask() {
                    //FIXME: Como traigo validate() para usarlo aca?
                    if (validate(this.title)) {
                        // id += 1
                        //FIXME: Como traigo ese tasks para agregarle esta que estoy creando?
                        tasks.push(this);
                        console.log(tasks);
                        taskInput.value = "";
                        checkTaskCount();
                        // let cardElement = document.createElement('div')
                        // cardElement.classList.add('card', 'my-2')
                        // cardElement.setAttribute('id', 'task-'+this.id);
                        // cards.appendChild(cardElement)
                        // let cardInnerElement = document.createElement('div')
                        // cardInnerElement.classList.add('task-card', 'card-body', 'd-flex', 'align-items-center', 'justify-content-between')
                        // cardElement.appendChild(cardInnerElement)
                        // let cardInnerTextElement = document.createElement('p')
                        // cardInnerElement.appendChild(cardInnerTextElement)
                        // cardInnerTextElement.appendChild(document.createTextNode(this.title))
                        // let link = document.createElement('a')
                        // link.href = '#'
                        // link.setAttribute('onclick', 'deleteTask('+id+')')
                        // let trashIcon = document.createElement('i')
                        // trashIcon.classList.add('fas', 'fa-trash')
                        // link.appendChild(trashIcon)
                        // cardInnerElement.appendChild(link)
                        taskInput.focus();
                    }
                }
                deleteTask() {
                    //FIXME: Porque me da error cuando le asigno que es un tipo HTMLElement?
                    let element = document.getElementById('task-' + this.id);
                    element.remove();
                    for (var i = 0; i < tasks.length; i++) {
                        var obj = tasks[i];
                        if (obj.id == this.id) {
                            let position = tasks.indexOf(obj);
                            tasks.splice(position, 1);
                        }
                    }
                    checkTaskCount();
                    showSuccessMessage('Tarea eliminada con éxito');
                }
            };
            exports_1("Task", Task);
        }
    };
});
