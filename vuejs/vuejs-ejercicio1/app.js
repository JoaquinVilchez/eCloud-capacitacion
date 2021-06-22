const app = new Vue({
    el: '#app',
    data: {
        titulo:'Hola mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad:10},
            {nombre: 'Manzana', cantidad:0},
            {nombre: 'Banana', cantidad:20}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 1
            })
            this.nuevaFruta = '';
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            this.frutas.forEach(fruta => {
                this.total = this.total + fruta.cantidad
            });
            return this.total;
        }
    }
})