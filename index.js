/*  To Do List - a CRUD app made with JS
 *
 *  Functions: 
 *    - task creation
 *    - reading tasks created
 *    - edit a task
 *    - delete a task
 *    * literally, CRUD
 *
 *  Naming conventions:
 *    * pascalCase - for function names
 *    * undercase - for variable names
 *
 */

class Task{
  static ctr = 1;

  constructor(task){
    this.id = Task.ctr;
    this.task = task;
    Task.ctr += 1;
  }
}


let tasks_arr = [];


export function sysAddTask(task_content){
  if(task_content != ''){
    let new_task = new Task(task_content);
    tasks_arr.push(new_task);
  }
}


export function sysGetTasks(){
  return tasks_arr;
}


export function editTask(task_id, new_task_content){
  let matched_index = 0;

  tasks_arr.forEach(element => {
    if(element.id == task_id){
      console.warn(`*** MSG: found ${task_id} for edit`);
      tasks_arr[matched_index].task = new_task_content;
      return;
    }
    
    matched_index += 1;
  });
}


export function deleteTask(task_id){
  let matched_index = 0;

  tasks_arr.forEach(element => {
    if(element.id == task_id){
      console.warn(`*** MSG: found ${task_id} for deletion`);
      // pop the index it's in
      tasks_arr.splice(matched_index, 1); 
      return;
    }
    console.log(`*** MSG: iterate ${matched_index + 1}`);
    
    matched_index += 1;
  });
}



// for CLI debugging
/*
console.log('start');

addTask('say hi'); // 1
addTask('say make brownies'); // 2
addTask('eat crinkles'); // 3
addTask('say hello'); // 4
addTask('');

showTasks();
deleteTask(3);
editTask(1, 'tephL is goated');
showTasks();
*/
