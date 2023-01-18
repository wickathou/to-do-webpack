import './style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import Task from './taskClass.js';
import taskList from './tasklistClass.js'

const inputRegex = /^\S/;
const taskListDom = document.getElementById('task-list');
const newTaskDom = document.getElementById('new-task');
let taskListElements = null

// document.getElementsByClassName

newTaskDom.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && inputRegex.test(e.target.value)) {
    taskList.add(new Task(e.target.value), taskListDom);
    e.target.value = ''
  };
})

taskListDom.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT') {
    const li = document.getElementById(`task-${e.target.id}`)
    li.classList.add('highlight')
    console.log(li);
    li.querySelector('.fa-ellipsis-vertical').classList.add('hidden')
    console.log(li.querySelector('.fa-trash-can'));
    li.querySelector('.fa-trash-can').classList.remove('hidden')

    
    e.target.addEventListener('change', (i) => {
      taskList.edit(i.target.value, i.target.id)
    })


    li.addEventListener('focusout', () => {
      li.classList.remove('highlight')
      li.querySelector('.fa-trash-can').classList.add('hidden')
      li.querySelector('.fa-ellipsis-vertical').classList.remove('hidden')
    })
  }
})