document.addEventListener('DOMContentLoaded', function() {
    var tasks = [];
    document.querySelector('#form').onsubmit = function (event){
    event.preventDefault();
    const li = document.createElement('li');
      
    let name = document.querySelector('#task_name').value;
    let task_priority = document.querySelector('#priority').value;
    let status;
    let taskEntrys = document.querySelectorAll('[name=task-status]');
    for (let i = 0; i< taskEntrys.length;i++){
    if (taskEntrys[i].checked){
    status = taskEntrys[i].value;
    }
    }
    let new_task = `<div class = "new-task"> <span> ${name} </span> <span>| ${task_priority} </span> <span> | ${status} </span> </div>
      
    <button class = "mark-complete"> Mark as Complete </button> <button class = "remove"> Remove</button>`;
    
    li.innerHTML = new_task
    
    tasks.push(name);
    document.querySelector('#task_list').append(li);
    document.querySelector('#task_name').value = '';
    return false;
      
    }
    document.addEventListener('click', function(event){
    element = event.target;
    if (element.className === 'remove'){
    element.parentElement.remove();
    
    }
    if (element.className === 'mark-complete' || element.className === 'completed'){
    //document.querySelector('#task-title').strike();
    element.parentElement.querySelector('.new-task').style.textDecoration = "line-through";
    element.status = "completed";
    }
    })
    
    });
    