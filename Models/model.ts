export class Model {
  user;
  item;
  constructor() {
    this.user = 'Saleh';
    this.item = [
      { actino: 'Buy laptop', done: false },
      { actino: 'learn angular', done: true },
      { actino: 'gime', done: false },
      { actino: 'hard working', done: false },
      { actino: 'today good', done: false },
    ];
  }
}
export class ToDoItem {
  Action;
  Done;
  constructor(action, done) {
    this.Action = action;
    this.Done = done;
  }
}
