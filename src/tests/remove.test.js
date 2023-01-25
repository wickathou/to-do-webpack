/**
 * @jest-environment jsdom
 */

import Tasks from '../tasklistClass.js'
import Task from '../taskClass.js'

// Base setup 

describe('Test remove a task', () => {
  test('Check that item count property is reduced by one', () => {
    const tasksList = new Tasks();
    const task = new Task('new task');
    tasksList.add(task);
    tasksList.remove(task.index);
    expect(tasksList.items).toBe(0)
  })
  test('Update list of tasks and return 0 elements', () => {
    const tasksList = new Tasks();
    const task = new Task('new task');
    tasksList.add(task);
    tasksList.remove(task.index);
    expect(tasksList.tasks.length).toBe(0)
  })
  test('Update localStorage and return 0 elements', () => {
    const tasksList = new Tasks();
    const task = new Task('new task');
    tasksList.add(task);
    tasksList.remove(task.index);
    expect(JSON.parse(localStorage.getItem('tasks')).length).toBe(0)
  })
  test('Deleting one task from the dom', () => {
    const tasksList = new Tasks();
    const task = new Task('new task');
    const ul = document.createElement('ul')
    tasksList.add(task);
    tasksList.add(new Task('2'));
    tasksList.add(new Task('3'));
    tasksList.remove(2);
    tasksList.generate(ul);
    const taskElement = ul.querySelectorAll('.task-list-element')
    expect(taskElement.length).toBe(2)
  })
  test('Deleting all tasks from the dom', () => {
    const tasksList = new Tasks();
    const task = new Task('new task');
    const ul = document.createElement('ul')
    tasksList.add(task);
    tasksList.add(new Task('2'));
    tasksList.add(new Task('3'));
    tasksList.remove(3);
    tasksList.remove(2);
    tasksList.remove(task.index);
    tasksList.generate(ul);
    const taskElement = ul.querySelectorAll('.task-list-element')
    expect(taskElement.length).toBe(0)
  })
})