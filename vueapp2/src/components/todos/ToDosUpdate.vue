<template>
<div>
  <h3>ToDos</h3>

    <form>
        <div class="field">
        <label class="label">Update/Remove ToDo By Id:</label>
        <div class="control">
            <input name="todoId" class="input" type="text" placeholder="" v-model="todosForm.todoId">
        </div>
      </div>

      <!-- <p>
        <button v-on:click.once.prevent="getTodosById">Update</button>
      </p> -->
      <p>
        <button v-on:click.once.prevent="updateToDos">Update</button>
        <button v-on:click.once="removeToDo">Remove</button>
      </p>
    </form>


    <form>
        <div class="field">
        <label class="label">Update ToDo By Title:</label>
        <div class="control">
            <input name="todotTitle" class="input" type="text" placeholder="" v-model="todosForm.todotTitle">
        </div>
      </div>

      <p>
        <button v-on:click.once.prevent="getTodosByTitle">Update</button>
      </p>
    </form>



    <section class="form" v-if="submitted===true">
        <form>  
        <div class="field">
            <label class="label">ToDo Completed ?</label>
            <p><strong>{{ todoById.id }}. {{ todoById.title }} (user: {{ todoById.userId }})</strong></p>
            <div class="control">
                <label class="radio">
                    <input type="radio" name="todoCompleted" value="true" v-model="todoById.completed">
                    True
                </label>
                <label class="radio">
                    <input type="radio" name="todoCompleted" value="false" v-model="todoById.completed">
                    False
                </label>
            </div>
        </div>

        <p>
        <button v-on:click.once="postTodo">Submit</button>
      </p>
    </form>
    </section>

</div>
</template>


<script>
import TutorialService from "../../services/TutorialService";

export default {
   name: 'ToDosUpdate',
    data() {
        return {
            submitted: false,
            todoById: {
                id: '',
                title: '',
                userId: '',
                completed: ''
            },
            todosForm: {
                todoId: '',
                todotTitle: ''
            },
            updateToDoById: ''
        };
    },
    // fetches users when component is created
    created: function() {
    },
    methods: {
        updateToDos() {
            this.getTodosById();
            this.submitted = true;
        },
        removeToDo() {
            this.getTodosById();
            TutorialService.deleteToDos(this.todoById.id)
            .then(results => {
                //  JSON responses automatically parsed
                this.todoRemoved = results.data;
                console.log('todoRemoved');
                console.dir(this.todoRemoved);
            })
        },
        getTodosById() {
            TutorialService.getToDosById(this.todosForm.todoId)
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
        getTodosByTitle() {
            console.log('Title:' + this.todosForm.todotTitle);
            TutorialService.findByTitleToDos(this.todosForm.todotTitle)
            .then(results => {
                //  JSON responses automatically parsed
                this.todoById = results.data;
                console.log('Getting todoByTitle');
                // this.todoById.forEach(value => { 
                    
                //         value.forEach((i,k) => {
                //             console.log('Value: ' + i + " Key: " + k);
                //         }); 
                // });
                
                this.submitted = true;
            })
            .catch(e => {
                this.errors.push(e)
            })
        },
        postTodo() {
            TutorialService.updateToDos(this.todoById.id, this.todoById)
            .then(results => {
                //  JSON responses automatically parsed
                this.updateToDoById = results.data;
                console.dir('updating todoById');
                console.dir(this.updateToDoById);
                alert("ToDo has been updated");
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