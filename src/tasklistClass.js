class Tasks {
  constructor() {
    this.tasks = [];
    this.items = 0;
  }

  add = (task) => {
    this.items += 1;
    task.index = this.items;
    this.tasks.push(task);
  }

  remove = () => {
    this.items -= 1;
    this.tasks.pop();
  }
}

const taskList = new Tasks();

export default taskList;