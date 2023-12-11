const app = Vue.createApp({
  data() {
      return {
          newTodo: '',
          todos: [
              { text: 'Portare a spasso il cane', done: false },
              { text: 'Andare agli allenamenti', done: true },
              { text: 'Svolgere esercizio' , done: false },
              { text: 'Andare in centro', done: false},
              { text: 'Fare un viaggio', done: true},
          ]
      };
  },
  methods: {
      addTodo() {
          if (this.newTodo.trim() !== '') {
              this.todos.push({ text: this.newTodo, done: false });
              this.newTodo = '';
          }
      },
      removeTodo(index) {
          this.todos.splice(index, 1);
      }
  }
});

app.mount('#app');