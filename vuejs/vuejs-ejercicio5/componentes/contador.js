Vue.component('contador', {
    template:
    `
    <div>
        <button class="btn btn-success" @click="contador++">+</button>
        <button class="btn btn-danger" @click="contador--">-</button>
        <h3>{{contador}}</h3>
        
        <div class="progress">
            <div
            class="progress-bar"
            role="progressbar"
            :style="{'width': contador+'%'}"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            :class="color"
            >
            {{contador}}%
            </div>
        </div>
    </div>
    `,    
    data(){
        return{
            contador: 0
        }
    },
    computed: {
        color(){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador > 10 && this.contador < 20,
                'bg-danger' : this.contador >=20
            }
        }
    }
})
