const App = {
data() {
    return {
        placecholderString: 'Введіть наступне завдання',
        title:  'Список завдань',
        inputValue: '',
        notes: ['Ранкова пробіжка' , 'Душ'],
        title2: 'Say Hello to my litlle friends!',
        myHtml: '<h1>Vue 3 App</h1>',
        person: {
            firstName: 'Oksana',
            lastName: 'Scvanchenkova',
            age: 32
        },
        items: [1, 2, 3, 4, 5, 6]

        }
    },
methods: {
    addNewNote(){
        if (this.inputValue !== ''){
        this.notes.push(this.inputValue)
        this.inputValue  = ''
        }
    },
    doubleCount(){
        console.log('doubleCount')
        return this.notes.length * 2
    }, 
    toUpperCase(item){
       return item.toUpperCase()
    },

    deleteNotes(idx){
        this.notes.splice(idx, 1)
    },
    addItem(){
        this.items.unshift(this.$refs.myInput.value)
        this.$refs.myInput.value = ''
    },
    log(item){
        console.log('log item', item)
    }
    // Метод для ентер
    // inputKeyPress(event) {
    //     if (event.key === 'Enter'){
    //         this.addNewNote()
    //     }
    // }
},
computed: {
    doubleCountComputed(){
        console.log('doubleCountComputed')
        return this.notes.length * 2
    },
    evenItems(){
        return this.items.filter(i => i % 2 === 0)
    }
},
watch: {
    inputValue(value){
        if (value.length > 50){
            this.inputValue = ''
        }
        console.log('input Value change', value)
    }
}
}

Vue.createApp(App).mount('#app');