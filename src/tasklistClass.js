class Tasks {
  constructor() {
    this.tasks = [];
    this.items = 0;
  }

  #addToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
    console.log(localStorage.getItem('tasks'));
  }

  #newTaskElement = (task, taskListDom) => {
    const li = document.createElement('li');
    li.classList = 'p-4 list-group-item d-flex align-items-center justify-content-between';
    li.innerHTML = `<div class="d-flex justify-content-between"><input class="form-check-input me-2" type="checkbox" value="" id="task-1"><label class="p-0 m-0 form-check-label" for="task-1">${task.description}</label><textarea class="p-0 m-0 border-0 hidden" name="" id="" cols="30" rows="1" placeholder="Test"></textarea></div><i class="fa-solid fa-ellipsis-vertical"></i>`;
    taskListDom.appendChild(li);
  }

  add = (task, taskListDom) => {
    this.items += 1;
    task.index = this.items;
    this.tasks.push(task);
    this.#addToLocalStorage()
    this.#newTaskElement(task, taskListDom)
  }

  remove = () => {
    this.items -= 1;
    this.tasks.pop();
  }
}

const taskList = new Tasks();

export default taskList;