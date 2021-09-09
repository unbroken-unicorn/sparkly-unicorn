<template>
<div>
  <h3>Posts</h3>
  <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
          <p><strong>{{post.title}}</strong></p>
          <p>{{post.body}}</p>
      </li>
  </ul>

  <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.id">
        {{error.message}}
      </li>
    </ul>

    <br>
    <!-- form starts here -->
    <section class="form">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input v-model="form.name" class="input" type="text" placeholder="Text input">
        </div>
      </div>
    </section>
    <div>{{ form.name }}</div>

    <!-- loop through all the `form` properties and show their values -->   
    <div class="column">
    <section class="section" id="results">
      <div class="box">
        <ul>          
          
          <li v-for="(value, key) in form" v-bind:key="value.id">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Posts',
    data() {
        return {
            posts: [],
            errors:[],
            form: {
                name: ''
            }
        };
    },
    // fetches users when component is created
    created: function() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(results => {
                //  JSON responses automatically parsed
                this.posts = results.data;
                console.dir(this.posts);
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    methods: {
        // push post to server when called
        postNewPost() { 
            axios.post(`https://jsonplaceholder.typicode.com/posts`, {
                bodfy: this.postBody
            })
            .then(response => {
                this.posts = response.data
                console.dir(this.posts);
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    }
  }
</script>

<style>
  h3 {
    margin-bottom: 5%;
  }
</style>