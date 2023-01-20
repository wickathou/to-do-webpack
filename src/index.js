import './style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import Task from './taskClass.js';
import taskList from './tasklistClass.js'

const inputRegex = /^\S/;
const numberRegex = /\d+/;
const deleteRegex = /^delete-/;
const taskListDom = document.getElementById('task-list');
const newTaskDom = document.getElementById('new-task');
let taskListElements = null


newTaskDom.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && inputRegex.test(e.target.value)) {
    taskList.add(new Task(e.target.value));
    taskList.generate(taskListDom)
    // taskListElements = document.querySelectorAll('.task-list-element')
    // taskEventsUpdater()
    e.target.value = ''
  };
})

document.addEventListener('click', (e) => {
  console.log(taskList.tasks);
  console.log(e.target.id);
  if (deleteRegex.test(e.target.id)) {
    console.log(test);
  }
})

const taskEventsUpdater = () => {
  taskListElements.forEach(task => {
    const id = task.id.match(numberRegex)[0];
    const li = document.getElementById(`task-${id}`)
    const deleteButton = document.getElementById(`delete-${id}`)

    // task.addEventListener('dragstart', e => {
    //   e.dataTransfer.setData('text/plain', e.target.id);
    // });
    // task.addEventListener('dragover', e => {
    //   e.preventDefault();
    // });
    // task.addEventListener('drop', e => {
    //   e.preventDefault();
    //   const data = e.dataTransfer.getData('text/plain');
    //   const draggableElement = document.getElementById(data);
    //   const dropzone = e.target.closest('li');
    //   console.log(dropzone);
    //   dropzone.parentNode.insertBefore(draggableElement, dropzone);
    // });
    
    // task.addEventListener('click', (e) => {
    //   // e.preventDefault();
    //   li.classList.add('highlight')
    //   li.querySelector('.fa-ellipsis-vertical').classList.add('hidden')
    //   li.querySelector('.fa-trash-can').classList.remove('hidden')
    // })
    
    // deleteButton.addEventListener('click', (i) => {
    //   // i.stopPropagation();
    //   taskList.remove(id);
    //   taskList.generate(taskListDom)
    // })

    // task.addEventListener('focusout', () => {
    //   li.classList.remove('highlight')
    //   li.querySelector('.fa-ellipsis-vertical').classList.remove('hidden')
    //   li.querySelector('.fa-trash-can').classList.add('hidden')
    // });

    // document.addEventListener('click', (e) => {
    //   if (!task.contains(e.target)) {
    //     li.classList.remove('highlight')
    //     li.querySelector('.fa-ellipsis-vertical').classList.remove('hidden')
    //     li.querySelector('.fa-trash-can').classList.add('hidden')
    //   }
    // });

  });
}

taskList.retrieve(taskListDom)