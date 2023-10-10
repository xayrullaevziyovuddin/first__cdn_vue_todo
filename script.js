let id = 1;

const app = {

    data() {
        return {
            title: "Циклы",
            text: '',
            notes: [{
                    id: id++,
                    name: 'Html'
                },

                {
                    id: id++,
                    name: 'css'
                },

                {
                    id: id++,
                    name: 'js'
                },


            ]

        }
    },
    methods: {

        delNote(note){
        /*     console.log(note); */
            this.notes = this.notes.filter((item) => item !== note)

        },
        addNote() {
            if(/* this.text.length>0 */ this.text != ''){
                this.notes.push({
                    id: id++,
                    name: this.text,
                   
                })
                this.text = ''
            }
          
            



        }
    },



}

Vue.createApp(app).mount('#app')



/* let form = document.querySelector('form')
form.addEventListener('submit', (event) =>{

    event.preventDefault()

}) */