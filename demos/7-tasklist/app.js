// Task List App
// Get The User Task
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', addTask);

// Key inputs works in some browser, which works in all of them
// Ascii table shows you a whole table of it

addEventListener('keydown', function(event){

    if (event.which == 13) {

        // This shows you key code stuff in the console
        // console.log(event);
        addTask();
    } 
});

// Add The Task to HTML

const tasksContainer = document.getElementById('tasks');
const taskInput = document.getElementById('add-task')


function addTask() {

    const newTask = taskInput.value;

    if(newTask) {

        // This creates a div into the html
        const taskDiv = document.createElement('div');

        // Adds a class to the tag
        taskDiv.classList.add('task')

        // Adds it into the main container for the tasks
        tasksContainer.appendChild(taskDiv);

        // Creates Paragraph
        const taskText = document.createElement('p');
        taskText.textContent = newTask;
        taskDiv.appendChild(taskText);
        
        const deleteBtn = document.createElement('button');

        deleteBtn.textContent = "Delete";

        // This function will always refer to the delete button
        deleteBtn.onclick = function() {
            // parentNode means Whatever it is inside of
            this.parentNode.remove();

        }

        taskDiv.appendChild(deleteBtn);




    }

}


// you can search on google with the tag name and see if textContent can be given




// Remove Completed Task