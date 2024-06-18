// Get DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const taskText = todoInput.value.trim(); // Trim removes whitespace from both ends of a string
  
  if (taskText !== '') {
    addTask(taskText); // Add task to the list
    todoInput.value = ''; // Clear input field
  }
});

// Function to add task to the list
function addTask(taskText) {
  const li = document.createElement('li');
  li.classList.add('todo-item');
  
  const taskSpan = document.createElement('span');
  taskSpan.classList.add('todo-item-text');
  taskSpan.innerText = taskText;
  li.appendChild(taskSpan);
  
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function() {
    li.classList.add('deleted'); // Apply delete animation class
    setTimeout(function() {
      li.remove(); // Remove the task from the list after animation
    }, 300); // Adjust timing to match animation duration
  });
  
  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.classList.add('complete-btn');
  completeButton.addEventListener('click', function() {
    li.classList.toggle('completed'); // Toggle completion status
  });

  
  
  li.appendChild(completeButton); // Add complete button to the task item
  li.appendChild(deleteButton); // Add delete button to the task item
  todoList.appendChild(li); // Add task item to the list
}
