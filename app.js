import { addTask, showTasks, editTask, deleteTask } from './index.js';

const refresh = document.getElementById("refresh");


refresh.addEventListener('click', event => {
    console.warn("MSG: clicked refresh");
    showTasks();    
});


let convertedList = [];

function convertDoc(){
    
}

// stuck at transferring task objects to DOC objs
