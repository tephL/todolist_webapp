import { sysGetTasks, sysAddTask, editTask, deleteTask } from './index.js';

const addtask_submit = document.getElementById("addtask_submit");
const addtask_input = document.getElementById("addtask_input");
const tasks_list = document.querySelector(".tasks_list");


function reloadTasks(){
    let sysTasks = sysGetTasks();
    tasks_list.innerHTML = '';
    
    sysTasks.forEach(element => {
        console.log(element);
        addTask(element.task);
    });
    
}

function addTask(value){
    let _new = document.createElement('div');
    _new.classList.add("task");
    //check
    let _done = document.createElement("div");
    _done.classList.add("done");
    let _doneImg = document.createElement("img");
    _doneImg.src = "assets/check.png";
    _doneImg.classList.add("checktask_button");
    _done.appendChild(_doneImg);
    //content
    let _newP = document.createElement('p');
    console.log(`MSG: Added ${value}`);
    _newP.classList.add("task_content");
    //delete

    let _delete = document.createElement('div');
    _delete.classList.add("delete");
    let _deleteImg = document.createElement("img");
    _deleteImg.src = "assets/x.png";
    _deleteImg.classList.add("deletetask_button");
    _delete.appendChild(_deleteImg);

    //content 2 + adding
    _newP.textContent = value;
    _new.appendChild(_done);
    _new.appendChild(_newP);
    _new.appendChild(_delete);
    tasks_list.prepend(_new);

    // add task to array
    sysAddTask(value);
}

tasks_list.addEventListener("click", event => {
    if(event.target.classList.contains("checktask_button")){
        console.log(event.target.classList);
        let _wholeBox = event.target.parentElement.parentElement;
        _wholeBox.classList.toggle("task_done");
    }

    if(event.target.classList.contains("deletetask_button")){
        let _wholeBox = event.target.parentElement.parentElement;
        _wholeBox.remove();
        console.log(`removed ${event.target.classList}`);
    }
    
})


/*
checktask_button.forEach(element => {
    element.addEventListener("click", event =>{
        
    });
});*/


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
        reloadTasks();
    }
    
    setTimeout(() => {
        event.target.style.background = 'rgba(254, 189, 213, 0.9)';
    }, 1000);
});


addtask_submit.addEventListener("mouseout", event => {
    event.target.style.background = 'rgba(254, 189, 213, 0.9)';
});
