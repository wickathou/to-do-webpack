import './style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import Task from './taskClass.js';
import taskList from './tasklistClass.js';

const inputRegex = /^\S/;
const deleteRegex = /^delete-/;
const taskListDom = document.getElementById('task-list');
const newTaskDom = document.getElementById('new-task');

taskList.insertElement = taskListDom;
console.log(taskList.insertElement);

newTaskDom.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && inputRegex.test(e.target.value)) {
    taskList.add(new Task(e.target.value));
    taskList.generate(taskListDom);
    e.target.value = '';
  }
});

document.addEventListener('click', (e) => {
  if (deleteRegex.test(e.target.id)) {
    console.log('Delete');
  }
})

taskList.retrieve(taskListDom);