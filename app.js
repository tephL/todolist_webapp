import { sysGetTasks, sysAddTask, sysDeleteTask, sysToggleStatus } from './index.js';

const addtask_submit = document.getElementById("addtask_submit");
const addtask_input = document.getElementById("addtask_input");
const tasks_list = document.querySelector(".tasks_list");
const menu_btn = document.getElementById("menu_btn");
const menu_content = document.getElementById("menu_content");


// displayTasks();
menu_btn.addEventListener("click", e => {
    menu_content.classList.toggle("menu_hide");
    console.log(e);
})

function addTask(value){
    sysAddTask(value);
    console.log(`MSG: Added ${value}`);
    displayTasks();
}


function displayTasks(){
    tasks_list.innerHTML = ''; // remove everything inside task_list

    // iterate through the array of elements
    // convert array's elements into a DOM element then push it to task_list
    sysGetTasks().forEach(element => {
        // task container
        let _new = document.createElement('div');
        if(element.status){
            _new.classList.add("task");
            _new.classList.add("task_done");
        } else{
            _new.classList.add("task");
        }
        _new.id = element.id;

        //check button
        let _upper = document.createElement("div");
        _upper.classList.add("upper");
        let _taskDetails = document.createElement("div");
        _taskDetails.classList.add("task_details");
        let _dateP = document.createElement("p");
        _dateP.textContent = element.date;
        _taskDetails.appendChild(_dateP);
        let _hourP = document.createElement("p");
        _hourP.textContent = element.time;
        _taskDetails.appendChild(_hourP);

        let _doneImg = document.createElement("img");
        _doneImg.src = "assets/check.png";
        _doneImg.classList.add("checktask_button");
        _upper.appendChild(_taskDetails);
        _upper.appendChild(_doneImg);

        //content box
        let _newP = document.createElement('p');
        _newP.textContent = element.task;
        _newP.classList.add("task_content");

        //delete button
        let _delete = document.createElement('div');
        _delete.classList.add("delete");
        let _deleteImg = document.createElement("img");
        _deleteImg.src = "assets/x.png";
        _deleteImg.classList.add("deletetask_button");
        _delete.appendChild(_deleteImg);

        //appending all to container
        _new.appendChild(_upper);
        _new.appendChild(_newP);
        _new.appendChild(_delete);
        tasks_list.prepend(_new);
    });
}


tasks_list.addEventListener("click", event => {
    if(event.target.classList.contains("checktask_button")){
        let _taskContainer = event.target.parentElement.parentElement;
        let _wholeBox = event.target.parentElement.parentElement;
        _taskContainer.classList.toggle("task_done");
        sysToggleStatus(_taskContainer.id);
    }


    if(event.target.classList.contains("deletetask_button")){
        let _taskContainer = event.target.parentElement.parentElement;
        sysDeleteTask(_taskContainer.id);
        displayTasks();
    }
});


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
        displayTasks();
    }
    
    setTimeout(() => {
        event.target.style.background = 'rgba(254, 189, 213, 0.9)';
    }, 1000);
});


addtask_submit.addEventListener("mouseout", event => {
    event.target.style.background = 'rgba(254, 189, 213, 0.9)';
});

// for the special task
const special_click = document.getElementById("special_click");
const special_task = document.querySelector(".special_task");

// letter container
const letter_container = document.getElementById("letter_container");
const letter_exit = document.getElementById("letter_exit");

special_click.addEventListener("click", e => {
    letter_container.classList.toggle("letter_container");
    special_task.classList.toggle("hide");
    console.log("clicked");
});

letter_exit.addEventListener("click", e => {
    letter_container.classList.toggle("letter_container");
    special_task.classList.toggle("hide");
});