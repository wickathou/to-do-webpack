import Task from './taskClass.js';

export const clearAll = (element, taskList, taskListDom) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    taskList.deleteCompleted()
    taskList.generate(taskListDom);
  })
}

export const newTask = (inputRegex, element, taskList, taskListDom) => {
  element.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && inputRegex.test(e.target.value)) {
      taskList.add(new Task(e.target.value));
      taskList.generate(taskListDom);
      e.target.value = '';
    }
  });
}