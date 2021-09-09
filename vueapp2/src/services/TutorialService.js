import http from "../http-common";

class TutorialService {
  getAllToDos() {
    return http.get("/todos");
  }

  getToDos(id) {
    return http.get(`/todos/${id}`);
  }

  createToDos(data) {
    return http.post("/todos", data);
  }

  updateToDos(id, data) {
    return http.put(`/todos/${id}`, data);
  }

  deleteToDos(id) {
    return http.delete(`/todos/${id}`);
  }

  deleteAllToDos() {
    return http.delete(`/todos`);
  }

  findByTitleToDos(title) {
    return http.get(`/todos?title=${title}`);
  }
}

export default new TutorialService();