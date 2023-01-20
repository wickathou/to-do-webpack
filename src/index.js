import './style.scss';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import taskList from './tasklistClass.js';
import {clearAll, newTask} from './taskDom.js';

const inputRegex = /^\S/;
const taskListDom = document.getElementById('task-list');
const newTaskDom = document.getElementById('new-task');
const clearAllDom = document.getElementById('clear-completed')

taskList.insertElement = taskListDom;

clearAll(clearAllDom, taskList, taskListDom)

newTask(inputRegex, newTaskDom, taskList, taskListDom)

taskList.retrieve(taskListDom);