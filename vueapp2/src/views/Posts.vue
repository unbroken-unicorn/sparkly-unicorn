<template>
<div>
  <h3>Posts</h3>
  <!-- <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
          <p><strong>{{post.title}}</strong></p>
          <p>{{post.body}}</p>
      </li>
  </ul>

  <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error.id">
        {{error.message}}
      </li>
    </ul> -->


    <!-- form starts here -->
    <form>

        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
            </ul>
        </p>

    <section class="form">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input name="userName" class="input" type="text" placeholder="Input Name Here" v-model="postForm.userName">
            <br>
            Name Input: <span>{{ postForm.userName }}</span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
            <input name="email" class="input" type="email" placeholder="" v-model="postForm.email">
            <!-- need to add in font awesome to show icons -->
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
        </div>
        <!-- <p class="help is-danger" v-show="isEmailInvalid">This email is invalid</p> -->
      </div>

      <div class="field is-horizontal">
          <label class="label">Post</label>
          <div class="control">
              <!-- interpolation does not work on textarea, use v-model for 2-way binding to work -->
              <textarea name="postMessage" class="textarea" placeholder="Post message here" cols="30" rows="10" v-model="postForm.postMessage"></textarea>
          </div>
      </div>

      <div class="field">
          <label class="label">Inquiry Type</label>
          <div class="control">
              <div class="select">
                  <select name="inquiry-type" v-model="postForm.inquiry_type">
                      <option value=""></option>
                      <option v-for="option in options.inquiry" v-bind:value="option.value" v-bind:key="option.id">
                          {{ option.text }}
                      </option>
                  </select>
              </div>
          </div>
      </div>

      <div class="field is-horizontal">
        <label class="label">Usecases</label>
        <div class="control is-expanded">
            <div class="select is-fullwidth is-multiple">
                <select name="usecases" multiple v-model="postForm.usecases" >
                    <option value="" selected></option>
                    <option value="debugging">Debugging</option>
                    <option value="fixing">Fixing Errors</option>
                    <option value="support">User Support</option>
                </select>
            </div>
        </div>
      </div>

      <div class="field">
        <label class="label"></label>
        <div class="control"> 
            <input type="checkbox" name="agreeToTerms">I agree to the <a href="#">terms and conditions</a>
        </div>
      </div>

      <div class="field">
          <label class="label">Is vue awesome?</label>
          <div class="control">
              <label class="radio">
                  <input type="radio" name="vue_awesome" value="Yes" v-model="postForm.vue_awesome">
                  Yes
              </label>
              <label class="radio">
                  <input type="radio" name="vue_awesome" value="No" v-model="postForm.vue_awesome">
                  No
              </label>
          </div>
      </div>


    <p>
        <button v-on:click.once.prevent="postNewPost">Submit</button>
    </p>
    

    </section>
    </form>

    
    <!-- loop through all the `form` properties and show their values -->   
    <h2>Form Selections</h2>
    <div class="column">
    <section class="section" id="formResults">
      <span>
        <ul>          
          <li v-for="(value, key) in postForm" v-bind:key="value.id">
              <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </span>
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
            postForm: {
                userName: 'Sherée Wiedeman',  // input value, using default value that is sent across to input box
                email: '',  // input value, testing email validation
                postMessage: '', // textarea value - interpolation does not work on textarea, need to use v-model
                inquiry_type: '', // single select box value 
                usecases: [], // multi select box values
                vue_awesome: '' // radio input value
            
            },
            isEmailInvalid: false,
            // drop down box options to pass into form for selection
            options: {
                inquiry: [
                    { value: 'feature', text: "Feature Request", id: 1 },
                    { value: 'bug', text: "Bug Report", id: 2  },
                    { value: 'support', text: "Support", id: 3  }
                ] 
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
                console.dir('Getting posts');
                console.dir(this.posts);
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    methods: {
        // push post to server when called
        postNewPost() { 
            
            this.checkPostForm();

            // axios.post(`https://jsonplaceholder.typicode.com/posts`, {
            //     body: this.postForm.postMessage
            // })
            // .then(response => {
            //     this.posts = response.data
            //     console.dir('Posting post');
            //     console.dir(this.posts);
            //     
            // })
            // .catch(e => {
            //     this.errors.push(e)
            // })
        },
        checkPostForm() {
            // validate userName as required
            // if (this.postForm.userName && this.postForm.email) {
            //     return true;
            // }

            this.errors = [];
            // if userName is missing, then add error message
            if(!this.postForm.userName) {
                this.errors.push('Name is Required');
            }

            if(!this.postForm.email) {
                this.errors.push('Email is Required');
            } 

            if (!this.errors.length) {
                return true;
            }

            //alert("postMessage: " + this.postForm.userName + " " + this.postForm.postMessage + " " + this.postForm.inquiry_type + " " + this.postForm.usecases + " " + this.postForm.vue_awesome);
        }
    }
  }
</script>

<style>

</style>