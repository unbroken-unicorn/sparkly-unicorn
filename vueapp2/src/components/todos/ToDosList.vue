<template>
<div>
  <h3>ToDos</h3>
  <ul v-if="todos && todos.length">
      <li v-for="todo of todos" v-bind:key="todo.id">
          <p><strong>{{todo.title}}</strong></p>
          <p>{{todo.userId}}</p>
          <p>{{todo.id}}</p>
          <p>{{todo.completed}}</p>
      </li>
  </ul>
</div>
</template>


<script>
import TutorialService from "../../services/TutorialService";

export default {
   name: 'ToDosList',
    data() {
        return {
            todos: {
                id: null,
                title: "",
                description: "",
                published: false
            },
            submitted: false
        };
    },
    // fetches users when component is created
    created: function() {
            TutorialService.getAllToDos(`todos`)
            .then(results => {
                //  JSON responses automatically parsed
                this.todos = results.data;
                console.dir('Getting todos');
                console.dir(this.todos);
            })
            .catch(e => {
                this.errors.push(e)
            })

    }
}
</script>


<style>
</style>