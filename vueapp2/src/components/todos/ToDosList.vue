<template>
<div>
  <h3>ToDos</h3>

    <form>
        <div class="field">
        <label class="label">Enter ToDo Id:</label>
        <div class="control">
            <input name="todoId" class="input" type="text" placeholder="" v-model="todosForm.todoId">
        </div>
      </div>

      <p>
        <button v-on:click.once.prevent="getTodosById">Submit</button>
      </p>
    </form>


    

    <div v-show="todoById">
        <h4>Select ToDo:</h4>
        <p><strong>{{ todoById.id }}. {{ todoById.title }}</strong> - Completed: {{ todoById.completed}}</p>
    </div>



  <ul v-if="todos && todos.length">
      <li v-for="todo of todos" v-bind:key="todo.id">
          <p><strong>{{todo.id}}. {{todo.title}}</strong> -  {{todo.userId}}
          <br>
         {{todo.completed}}</p>
          
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
            submitted: false,
            todoById: '',
            todosForm: {
                todoId: ''
            }
        };
    },
    // fetches users when component is created
    created: function() {
            TutorialService.getAllToDos()
            .then(results => {
                //  JSON responses automatically parsed
                this.todos = results.data;
                console.dir('Getting todos');
                console.dir(this.todos);
            })
            .catch(e => {
                this.errors.push(e)
            })

    },
    methods: {
        getTodosById() {
            TutorialService.getToDosById(this.todosForm.todoId)
            .then(results => {
                //  JSON responses automatically parsed
                this.todoById = results.data;
                console.dir('Getting todoById');
                console.dir(this.todoById);
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    }
}
</script>


<style>
</style>