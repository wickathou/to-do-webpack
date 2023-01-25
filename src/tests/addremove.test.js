import Tasks from '../tasklistClass.js'
import Task from '../taskClass.js'

//--test Add task

describe('Test add a task', ()=> {
  //Add task to local Storage
  test('Add task to localStorage', () => {
    //Arange
    const tasksLs = new Tasks();
    const task = new Task('newTask');
    //Act
    tasksLs.add(task);
    //asset
    expect(tasksLs.tasks.length).toBe(1)
  });
  //test DOM manipulation when add a task
  test('Display new task', () => {
    const task = new Task('newTask');
    
    document.body.innerHTML =
    '<div>' 
    '  <ul id="list"><li></li></ul>' 
    '</div>';
   
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
  })
})