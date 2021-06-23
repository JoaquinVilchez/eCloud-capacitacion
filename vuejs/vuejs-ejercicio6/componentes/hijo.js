Vue.component('hijo', {
    template:
        `
        <div class="py-5 bg-success">
            <h4>Componente hijo: {{numero}}</h4>
            <h4>Nombre: {{nombre}}</h4>
            <button class="btn btn-light" @click="numero++">+</button>
            <button class="btn btn-dark" @click="numero--">-</button>
        </div>
    `,
    props: ['numero'],
    data() {
        return {
            nombre: 'Juan'
        }
    },
    mounted(){ //Se ejecuta una vez que el DOM ya esta listo
        this.$emit('nombreHijo', this.nombre) //Emite un evento
        this.$emit('numeroHijo', this.numero)
    }
})