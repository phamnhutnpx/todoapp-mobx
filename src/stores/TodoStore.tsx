import { action, makeObservable, observable } from "mobx";

export interface Todo {
  content: string;
  completed: boolean;
}

export default class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
    });
  }

  //   add new todo
  addTodo = (content: string) => {
    const newTodo: Todo = {
      content,
      completed: false,
    };
    this.todos.push(newTodo);
  };
}
