/**
 * @jest-environment jsdom
 */

import Tasks from '../tasklistClass.js';
import Task from '../taskClass.js';

// --test Add task

describe('Test add a task', () => {
  // Add task to local Storage
  test('Add task to localStorage', () => {
    // Arange
    const tasksLs = new Tasks();
    const task = new Task('newTask');
    // Act
    tasksLs.add(task);
    // asset
    expect(tasksLs.tasks.length).toBe(1);
  });
  // test DOM manipulation when add a task
  test('adds a new task element to the DOM', () => {
    // -- Arrange-- Create a Tasks instance and insert it into a mock container element
    const container = document.createElement('div');
    const tasks = new Tasks(container);
    const task = new Task('Task added to DOM');
    // --Act-- Add a new task
    tasks.add(task);
    tasks.generate(container);

    // --Asset--Check if the task element has been added to the container
    const taskElement = container.querySelector('.task-list-element');
    expect(taskElement).toBeTruthy();
  });
});