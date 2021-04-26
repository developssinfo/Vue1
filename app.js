Vue.createApp({

    data(){
        return{
            goals:[],
            enteredValue:'',
            linkVueValue:'https://vuejs.org/',
            linkVueText:'Vue.JS'
        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
        }
    }
}).mount('#form1');