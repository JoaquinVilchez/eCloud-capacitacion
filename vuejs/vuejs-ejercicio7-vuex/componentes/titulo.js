Vue.component('titulo', {
    template: 
    `
        <div>
            <p>Padre:</p>
            <h1>Numero {{$store.state.numero}}</h1>
            <hr>
            <p>Hijo:</p>
            <hijo></hijo>
        </div>
    `
})