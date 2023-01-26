/**
 * @jest-environment jsdom
 */

import Tasks from '../tasklistClass.js';
import Task from '../taskClass.js';

describe('Testing edit functionality', () => {
  test('Updating a the description in the middle task', () => {
    const tasksList = new Tasks();
    tasksList.add(new Task('new task 1'));
    tasksList.add(new Task('new task 2'));
    tasksList.add(new Task('new task 3'));
    tasksList.edit('Changed task description', 2);
    expect(tasksList.tasks[1].description).toMatch(/Changed task description/);
  });
  test('A task description is updated', () => {
    const tasksList = new Tasks();
    tasksList.add(new Task('new task 1'));
    tasksList.edit('Changed task description', 1);
    expect(tasksList.tasks[0].description).toMatch(/Changed task description/);
  });
  test('Task completion marked as incomplete', () => {
    const tasksList = new Tasks();
    tasksList.add(new Task('new task 1'));
    tasksList.status(false, 1);
    expect(tasksList.tasks[0].complete).toBeFalsy();
  });
  test('Task completion marked as incomplete between multiple other tasks', () => {
    const tasksList = new Tasks();
    tasksList.add(new Task('new task 1'));
    tasksList.add(new Task('new task 2'));
    tasksList.add(new Task('new task 3'));
    tasksList.status(false, 2);
    expect(tasksList.tasks[1].complete).toBeFalsy();
  });
  test('Task completion marked as complete', () => {
    const tasksList = new Tasks();
    tasksList.add(new Task('new task 1'));
    tasksList.status(true, 1);
    expect(tasksList.tasks[0].complete).toBeTruthy();
  });
  test('Task completion marked as complete between multiple other tasks', () => {
    const tasksList = new Tasks();
    tasksList.add(new Task('new task 1'));
    tasksList.add(new Task('new task 2'));
    tasksList.add(new Task('new task 3'));
    tasksList.status(true, 2);
    expect(tasksList.tasks[1].complete).toBeTruthy();
  });
});