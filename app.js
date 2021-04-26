Vue.createApp({

    data(){
        return{
            goals:[],
            enteredValue:'',
            linkVueValue:'https://vuejs.org/',
            linkVueText:'Vue.JS',
            fullname: 'Joseph Commit',
            welcome_greets: 'Hello '
        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue);
        },
        printName(){
            welcome_greets = 'Hi ';
            return this.welcome_greets + this.fullname + '!';
        }
    }
}).mount('#form1');