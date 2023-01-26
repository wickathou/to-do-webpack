/**
 * @jest-environment jsdom
 */

import Tasks from '../tasklistClass.js';
import Task from '../taskClass.js';

// --test Clear All completed

describe('Clear all comleted', () => {
  test('Should remove all completed tasks', () => {
    // Arange - Create tasks -
    const tasksLs = new Tasks();
    const task1 = new Task('task1');
    const task2 = new Task('task2');
    const task3 = new Task('task3');
    // Add tasks and change status
    tasksLs.add(task1);
    tasksLs.status(true, 1);
    tasksLs.add(task2);
    tasksLs.status(true, 2);
    tasksLs.add(task3);
    tasksLs.status(true, 3);
    // act - call the function to delete all completed tasks
    tasksLs.deleteCompleted();
    //  asset - expect the length of tasks array to be 0
    expect(tasksLs.tasks.length).toBe(0);
  });
  test('Should remove all completed tasks', () => {
    // Arange - Create tasks -
    const tasksLs = new Tasks();
    const task1 = new Task('task1');
    const task2 = new Task('task2');
    const task3 = new Task('task3');
    tasksLs.add(task1);
    tasksLs.status(true, 1);
    tasksLs.add(task2);
    tasksLs.status(false, 2);
    tasksLs.add(task3);
    tasksLs.status(true, 3);
    // act - call the function to delete all completed tasks
    tasksLs.deleteCompleted();
    //  asset - expect the length of tasks array to be 1
    expect(tasksLs.tasks.length).toBe(1);
  });
  test('Deleting all completed tasks from the DOM', () => {
  // Arange - Create tasks -
    const tasksLs = new Tasks();
    const task1 = new Task('task1');
    const task2 = new Task('task2');
    const task3 = new Task('task3');
    tasksLs.add(task1);
    tasksLs.status(true, 1);
    tasksLs.add(task2);
    tasksLs.status(false, 2);
    tasksLs.add(task3);
    tasksLs.status(true, 3);
    const container = document.createElement('div');
    // act - call the function to delete all completed tasks
    tasksLs.deleteCompleted();
    tasksLs.generate(container);
    //  asset - expect the length of tasks array to be 1
    const taskElement = container.querySelectorAll('.task-list-element');
    expect(taskElement.length).toBe(1);
  });
  test('Deleting all completed tasks from the DOM', () => {
    // Arange - Create tasks -
    const tasksLs = new Tasks();
    const task1 = new Task('task1');
    const task2 = new Task('task2');
    const task3 = new Task('task3');
    const task4 = new Task('task4');
    tasksLs.add(task1);
    tasksLs.status(true, 1);
    tasksLs.add(task2);
    tasksLs.status(true, 2);
    tasksLs.add(task3);
    tasksLs.status(false, 3);
    tasksLs.add(task4);
    tasksLs.status(false, 4);
    const container = document.createElement('div');
    // act - call the function to delete all completed tasks
    tasksLs.deleteCompleted();
    tasksLs.generate(container);
    //  asset - expect the length of tasks array to be 2
    const taskElement = container.querySelectorAll('.task-list-element');
    expect(taskElement.length).toBe(2);
  });
});
