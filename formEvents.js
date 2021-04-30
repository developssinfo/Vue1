Vue.createApp({

    data(){
        return{
            name:'isai',
            lastname:'villalba',
            summary:''
        }
    },
    computed:{
        fullname(){
            return this.name + ' ' + this.lastname;
        }
    },
    methods:{
        readName(event){
            this.summary = event.target.value;
            this.name = event.target.value;
        },
        show(){
            this.summary = 'Summary: ' + this.name;
        }
    }
}).mount('#formEvents');