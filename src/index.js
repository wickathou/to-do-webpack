import './style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import Task from './taskClass.js';
import taskList from './tasklistClass.js'

const taskListDom = document.getElementById('task-list');
const newTaskDom = document.getElementById('new-task')

newTaskDom.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    taskList.add(new Task(e.target.value), taskListDom);
    e.target.value = ''
  };
})

// taskList.add(new Task('One task with index 1'), taskListDom);
// taskList.add(new Task('Different task with index 2'), taskListDom);
// taskList.add(new Task('One last with index 3'), taskListDom);
