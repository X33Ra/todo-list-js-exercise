// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title) {
  taskTitles.push(title);
  taskComplete.push(false);
};
// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
const completeTask = function(taskIndex) {
  taskComplete[taskIndex] = true;
};

// Print the state of a task to the console in a nice readable way
const logTaskState = function(taskIndex) {
  const title = taskTitles[taskIndex];
  const complete = taskComplete[taskIndex];
  console.log(`${title} has${complete ? " " : " not "}been completed`);
};

// DRIVER CODE BELOW

newTask("Clean Cat Litter"); // task 0
newTask("Do Laundry"); // task 1

logTaskState(0); // Clean Cat Litter has not been completed
completeTask(0);
logTaskState(0); // Clean Cat Litter has been completed
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

function newTask(title, description) {
  taskTitles.push(title);
  taskDescriptions.push(description);
  tasksComplete.push(false);
}
