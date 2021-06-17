System.register([], function (exports_1, context_1) {
    "use strict";
    var Dashboard;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Dashboard = class Dashboard {
                constructor(element) {
                    this.element = element;
                    this.el = document.getElementById(element);
                    this.render();
                }
                addTask(title) {
                }
                deleteTask() {
                }
                render() {
                    let successButton = this.el.querySelector('#success-button');
                    successButton.addEventListener('click', function (e) {
                        e.preventDefault();
                    });
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
                }
            };
            exports_1("Dashboard", Dashboard);
        }
    };
});
