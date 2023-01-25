/**
 * @jest-environment jsdom
 */

import Tasks from '../tasklistClass.js'
import Task from '../taskClass.js'

// Test remove task 

// Base setup 

describe('Test remove a task', () => {
  test('Remove task from localStorage', () => {
    const tasksList = new Tasks();
    const task = new Task('new task');
    tasksList.add(task);
    //Act
    tasksList.remove(task.index);
    //asset
    expect(tasksList.tasks.length).toBe(0)
  })
})