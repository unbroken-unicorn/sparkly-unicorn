import axios from "axios";

export default axios.create({
//   baseURL: "http://localhost:8080/api",  // change to reflect the REST APIs url that your server configures
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json"
  }
});