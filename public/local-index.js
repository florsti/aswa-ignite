// run the code
main();

// stores all tasks
const tasks = [];

// entry function
async function main() {
    await loadTasks();
    displayTasks();
}

// Calls server to retrieve all tasks
async function loadTasks() {
    try {
        // Uses fetch to call server
        const response = await fetch('/api/tasks');
        // Reads returned JSON, which contains one property called tasks
        const retrievedData = await response.json();
        // Retrieve tasks, which contains an array of all tasks in database
        const retrievedTasks = retrievedData.tasks;
        // Loop through all tasks
        for (let task of retrievedTasks) {
            // Add each task to the array
            tasks.push(task);
        }    
    } catch {
        // If there is an error, display a generic message on the page
        const messageElement = document.createElement('li');
        messageElement.innerHTML = "Could not pull data. Make sure you've <a href='https://github.com/geektrainer/aswa-starter/docs/add-database.md'>configured the database</a>."
        document.getElementById('task-list').appendChild(messageElement);
    }
}

// Displays all tasks on page (called on load)
function displayTasks() {
    // Loop through all tasks in the local array
    for (let task of tasks) {
        // Call helper function to add to UI
        addTaskToDisplay(task);
    }
}

// Helper function to add task to UI
function addTaskToDisplay(task) {
    // Create li element to store task display
    const taskItem = document.createElement('a');
    taskItem.href = '#';
    taskItem.innerText = task.name;
    taskItem.className = 'list-group-item';

    // Get the ul element from the page
    const taskListElement = document.getElementById('task-list');
    // Add the new task to the list on the page
    taskListElement.appendChild(taskItem);
}
