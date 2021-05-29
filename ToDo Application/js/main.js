const userInput = document.querySelector(".input-todo"); //userinput box
const addButton = document.querySelector('.todo-button'); //add task button
const listItem = document.querySelector('.list-items'); //tasks
const filter = document.querySelector('.control-container');

//event listener to add a todo.
document.addEventListener('DOMContentLoaded', getTasks);
addButton.addEventListener('click', addTodo);
listItem.addEventListener('click', checkAndDelete);
filter.addEventListener('click', filterTasks);

// function to add list item
function addTodo(event) {
    event.preventDefault(); //stop page from reloading after hitting submit
    
    // create div with class todo
    const div = document.createElement('div');
    div.classList.add('todo');

    // =====================================================================
    //create check button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');

    //attach button tag to div
    div.appendChild(completeButton);


    //============================================================================
    //create li for list items
    const newItem = document.createElement('li');
    newItem.innerText = userInput.value;

    //attach li tag to div
    div.appendChild(newItem);

    //Save to local storage
    saveToLocal(userInput.value);

    // =======================================================================
    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
    deleteButton.classList.add('delete-btn');

    //attach delete tag to div
    div.appendChild(deleteButton);

    //send to HTML
    listItem.appendChild(div);

    //clear input value box
    userInput.value = null;
}

function checkAndDelete(e) {

    const item = e.target

    //makes delete button remove the task
    if (item.classList[0] === 'delete-btn') {
        const task = item.parentElement;
        removeLocal(item);
        task.remove();
    }

    //Changes task class to "todo completed"
    if (item.classList[0] === 'complete-btn') {
        const task = item.parentElement;
        task.classList.toggle('completed');
    }
}

function filterTasks(e) {
    const tasks = listItem.childNodes;
    tasks.forEach(function(todo){
        switch(e.target.value){
            case "all": //displays all tasks completed or remaining
                todo.style.display = 'flex';
            break;

            case "active": //displays tasks remaining
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else {
                    todo.style.display = 'none';
                }
            break;

            case "completed": //displays completed tasks
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else {
                    todo.style.display = 'none';
                }
            break;
        }
    });
    
}

function saveToLocal(todo) {
     let todos;
     if(localStorage.getItem('todos') === null) {
         todos = [];
     } else {
         todos =   JSON.parse(localStorage.getItem('todos'));
     }
     todos.push(todo);
     localStorage.setItem('todos', JSON.stringify(todos));
}


// ========================================================================================================

function getTasks() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos =   JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function(todo) {
        // create div with class todo
    const div = document.createElement('div');
    div.classList.add('todo');

    // =====================================================================
    //create check button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');

    //attach button tag to div
    div.appendChild(completeButton);


    //============================================================================
    //create li for list items
    const newItem = document.createElement('li');
    newItem.innerText = todo;

    //attach li tag to div
    div.appendChild(newItem);

    // =======================================================================
    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
    deleteButton.classList.add('delete-btn');

    //attach delete tag to div
    div.appendChild(deleteButton);

    //send to HTML
    listItem.appendChild(div);
    })
}

function removeLocal(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos =   JSON.parse(localStorage.getItem('todos'));
    }

    const taskIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(taskIndex),1)
    localStorage.setItem('todos', JSON.stringify(todos));
}