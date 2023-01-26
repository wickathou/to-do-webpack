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
    const task3 = new Task ('task3');
    tasksLs.add(task1);
    tasksLs.status(true, 1);
    tasksLs.add(task2)
    tasksLs.status(true, 2);
    tasksLs.add(task3)
    tasksLs.status(true, 3);
    // Call the function to delete all tasks checked.
    tasksLs.deleteCompleted();
    //  asset - expect to be 1
    expect(tasksLs.tasks.length).toBe(0);
  });
  test('Should remove all completed tasks', () => {
    // Arange - Create tasks -
    const tasksLs = new Tasks();
    const task1 = new Task('task1');
    const task2 = new Task('task2');
    const task3 = new Task ('task3');
    tasksLs.add(task1);
    tasksLs.status(true, 1);
    tasksLs.add(task2)
    tasksLs.status(false, 2);
    tasksLs.add(task3)
    tasksLs.status(true, 3);
    // Call the function to delete all tasks checked.
    tasksLs.deleteCompleted();
    //  asset - expect to be 1
    expect(tasksLs.tasks.length).toBe(1);
  });
});
