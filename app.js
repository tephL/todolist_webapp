import { showTasks, editTask, deleteTask } from './index.js';

const addtask_submit = document.getElementById("addtask_submit");
const addtask_input = document.getElementById("addtask_input");
const tasks_list = document.querySelector(".tasks_list");

function addTask(value){
    let _new = document.createElement('div');
    _new.classList.add("task");
    let _newP = document.createElement('p');
    console.log(`MSG: Added ${value}`);

    _newP.textContent = value;
    _new.appendChild(_newP);
    tasks_list.prepend(_new);
}


// hello
// shadings when submit is being clicked
// getting value of textbox if clicked
addtask_submit.addEventListener("mouseover", event => {
    event.target.style.background = 'rgba(247, 188, 209, 0.9)';
});


addtask_submit.addEventListener("click", event => {
    event.target.style.background = 'rgba(238, 189, 206, 0.9)';
    if(addtask_input.value != ''){
        addTask(addtask_input.value);
        addtask_input.value = '';
    }else{
        console.warn("MSG: must have input!");
    }
    
    setTimeout(() => {
        event.target.style.background = 'rgba(254, 189, 213, 0.9)';
    }, 1000);
});


addtask_submit.addEventListener("mouseout", event => {
    event.target.style.background = 'rgba(254, 189, 213, 0.9)';
});