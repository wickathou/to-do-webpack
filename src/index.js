import "./style.scss";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'

const taskListDom = document.getElementById('task-list')

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
    this.description = task
    this.complete = false
    this.index = 0
  }
}

const newList = new Tasks

newList.add(new Task('One task with index 1'))
newList.add(new Task('Different task with index 2'))
newList.add(new Task('One last with index 3'))

newList.tasks.forEach(task => {
  const li = document.createElement('li')
  li.classList = 'p-4 list-group-item d-flex align-items-center justify-content-between'
  li.innerHTML = `<div class="d-flex justify-content-between"><input class="form-check-input me-2" type="checkbox" value="" id="task-1"><label class="p-0 m-0 form-check-label" for="task-1">${task.description}</label><textarea class="p-0 m-0 border-0 hidden" name="" id="" cols="30" rows="1" placeholder="Test"></textarea></div><i class="fa-solid fa-ellipsis-vertical"></i>`
  taskListDom.appendChild(li)
});


