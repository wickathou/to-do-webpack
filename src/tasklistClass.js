class Tasks {
  constructor() {
    this.tasks = [];
    this.items = 0;
    this.idGen = 0;
  }

  #addToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }

  #newTaskElement = (task, taskListDom) => {
    const li = document.createElement('li');
    li.classList = 'p-4 task-list-element list-group-item d-flex align-items-center justify-content-between';
    li.id = `task-${task.uniqueId}`;
    li.setAttribute('draggable', true)
    li.innerHTML = `<div class="d-flex w-100"><input class="form-check-input me-2" type="checkbox" value=""><input class="w-100 p-0 m-0 border-0 hiden" name="" id="${task.uniqueId}" value="${task.description}"></div><div><a id="order-${task.uniqueId}"><i class="ps-2 fa-solid fa-ellipsis-vertical"></i></a><a id="delete-${task.uniqueId}"><i class="ps-2 hidden fa-solid fa-trash-can"></i></a></div>`;
    taskListDom.appendChild(li);
  }

  edit = (editTaskDescription, id) => {
    let taskMod = this.tasks.find(task => task.uniqueId === parseInt(id, 10));
    taskMod.description = editTaskDescription
  }

  add = (task, taskListDom) => {
    this.items += 1;
    this.idGen += 1;
    task.uniqueId = this.idGen;
    this.tasks.push(task);
    // this.#addToLocalStorage()
    this.#newTaskElement(task, taskListDom)
  }

  remove = (id) => {
    this.items -= 1;
    const updatedTasks = this.tasks.filter(task => task.uniqueId !== parseInt(id, 10));
    if (updatedTasks.length > 0) {
      let indexUpdater = 0
      updatedTasks.forEach((task) => {
        indexUpdater += 1;
        task.index = indexUpdater
      })
      this.tasks = updatedTasks;
    }
    console.log(this.tasks);
  }
}

const taskList = new Tasks();

export default taskList;