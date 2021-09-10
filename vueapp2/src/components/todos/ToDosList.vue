<template>
    <div>
        <h3>Find ToDo:</h3>


        <form>
        <div class="field">
        <label class="label">Find ToDo By Id:</label>
        <div class="control">
            <input name="todoId" class="input" type="text" placeholder="" v-model="todosFindForm.todoId">
        </div>
      </div>

      <p>
        <button v-on:click.once.prevent="getTodosById">Find</button>
      </p>
    </form>


<div id="app">
    <button type="button" class="btn" @click="showModal">
      Open Modal!
    </button>

    <Modal v-show="isModalVisible" title="I am new to vue!!" @close="closeModal"/>
  </div>


    <h3>ToDos List:</h3>

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
import Modal from '../../components/Modal.vue';

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
            todosFindForm: {
                todoId: '',
                todotTitle: ''
            },
            isModalVisible: false
        };
    },
    components: {
      Modal,
    },
    // fetches users when component is created
    created: function() {
            TutorialService.getAllToDos()
            .then(results => {
                //  JSON responses automatically parsed
                this.todos = results.data;
                console.log('Getting todos');
                console.dir(this.todos);
            })
            .catch(e => {
                this.errors.push(e)
            })

    },
    methods: {
        getTodosById() {
            TutorialService.getToDosById(this.todosFindForm.todoId)
            .then(results => {
                //  JSON responses automatically parsed
                this.todoById = results.data;
                console.log('Getting todoById');
                console.dir(this.todoById);
            })
            .catch(e => {
                this.errors.push(e)
            })
        },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}
</script>

<style>

</style>