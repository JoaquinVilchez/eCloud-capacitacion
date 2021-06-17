import { Task } from "../modules/Task";

export class Dashboard{
    tasks:Task[];
    el:HTMLElement;

    constructor(public element:string){
        this.el = document.getElementById(element) as HTMLElement;
        this.render();
    }

    private addTask(title:string){
    }

    private deleteTask(){

    }

    private render():void{
        
        let successButton:HTMLElement = this.el.querySelector('#success-button')
        successButton.addEventListener('click', function(e){
            e.preventDefault()
        })

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
}