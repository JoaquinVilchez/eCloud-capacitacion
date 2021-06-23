/*Este componente recibe a traves del evento 
@nombreHijo creado en el componente hijo.js 
el nombre asignado. Es necesario asignarlo 
en una propiedad data*/

Vue.component('padre',{
    template: //html
    `
        <div class="p-5 bg-dark text-white">
            <h2>Componente padre: {{numeroPadre}}</h2>
            <button class="btn btn-success my-1" @click="numeroPadre++">+</button>
            <button class="btn btn-danger my-1" @click="numeroPadre--">-</button>
            <h3>Nombre padre: {{nombrePadre}}</h3> 
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
        </div>
    `,
    data(){
        return{
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})