import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [{ id: 1, content: "MobX 공부하기", done: false }];

  constructor() {
    makeAutoObservable(this);
  }

  get allTodos() {
    return this.todos;
  }
}

export default TodoStore;
