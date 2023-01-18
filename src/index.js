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
  const id = e.target.id.match(/\d+/)[0];
  console.log(id);
  const li = document.getElementById(`task-${id}`)

  li.classList.add('highlight')
  li.querySelector('.fa-ellipsis-vertical').classList.add('hidden')
  li.querySelector('.fa-trash-can').classList.remove('hidden')
  if (e.target.tagName === 'INPUT') {

    e.target.addEventListener('change', (i) => {
      taskList.edit(i.target.value, i.target.id)
    })
    
    // li.addEventListener('focusout', () => {
    //   li.classList.remove('highlight')
    //   li.querySelector('.fa-ellipsis-vertical').classList.remove('hidden')
    //   li.querySelector('.fa-trash-can').classList.add('hidden')
    // })
  }
})

taskListDom.addEventListener('focusout', (f) => {
  const id = f.target.id.match(/\d+/)[0];
  console.log(id);
  const li = document.getElementById(`task-${id}`)
  li.classList.remove('highlight')
  li.querySelector('.fa-ellipsis-vertical').classList.remove('hidden')
  li.querySelector('.fa-trash-can').classList.add('hidden')
});

// taskListDom.addEventListener('click', (e) => {
//   const id = e.target.id.match(/\d+/)[0];
//   console.log(id);
//   const li = document.getElementById(`task-${id}`)
  
//   if (/^delete-/.test(e.target.id)) {
//     console.log('delete');
//   }

//   li.querySelector(`#delete-${id}`).addEventListener('click', (a) => {
//     console.log('delete');
//     li.remove();
//   })
// })