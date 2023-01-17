import "./style.scss";

class Tasks {
  constructor() {
    this.tasks = []
    this.items = 0
  }

  add = (task) => {
    this.items += 1
    task.index = this.items
    this.tasks.push(task)
  }

  remove = () => {
    this.items -= 1
    this.tasks.pop()
  }
}

class Task {
  constructor(task) {
    this.task = task
    this.complete = false
    this.index = 0
  }
}

const newList = new Tasks

newList.add(new Task('A task not completed 1'))
newList.add(new Task('A task not completed 2'))
newList.add(new Task('A task not completed 3'))

console.log(newList);
