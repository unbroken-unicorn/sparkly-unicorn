<template>
<div>
  <h3>ToDos Create</h3>

    <form>
        <div class="field">
            <label class="label">Enter ToDo Title:</label>
            <div class="control">
                <input name="todoTitle" class="input" type="text" placeholder="" v-model="todosCreateForm.todoTitle">
            </div>
      </div>

      <div class="field">
            <label class="label">Enter User Id:</label>
            <div class="control">
                <input name="todoUserId" class="input" type="text" placeholder="" v-model="todosCreateForm.todoUserId">
            </div>
      </div>

      <div class="field">
          <label class="label">Completed?</label>
          <div class="control">
              <label class="radio">
                  <input type="radio" name="todoCompleted" value="True" v-model="todosCreateForm.todoCompleted">
                  True
              </label>
              <label class="radio">
                  <input type="radio" name="todoCompleted" value="False" v-model="todosCreateForm.todoCompleted">
                  False
              </label>
          </div>
      </div>


      <p>
        <button v-on:click.once.prevent="postTodo">Submit</button>
      </p>
    </form>


    

    <div v-show="todoCreated">
        <h4>Select ToDo:</h4>
        <p><strong>{{ todoCreated.id }}. {{ todoCreated.todoTitle }}</strong> - Completed: {{ todoCreated.todoCompleted}} By: {{ todoCreated.todoUserId}}</p>
    </div>


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
                todoTitle: "",
                description: "",
                published: false
            },
            submitted: false,
            todoCreated: '',
            todosCreateForm: {
                todoTitle: '',
                todoUserId: '',
                todoCompleted: ''
            }
        };
    },
    // fetches users when component is created
    created: function() {

    },
    methods: {
        postTodo() {
            TutorialService.createToDos(this.todosCreateForm)
            .then(results => {
                //  JSON responses automatically parsed
                this.todoCreated = results.data;
                console.dir('createToDos');
                console.dir(this.todoCreated);
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