// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// Functions
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create Li
  const newTodo = document.createElement('li');
  // adds the value to the page we type in
  newTodo.innerText = todoInput.value;
  // creates a class for our newly created li
  newTodo.classList.add('todo-item');
  // adds it to our created div
  todoDiv.appendChild(newTodo);

  // completed button
  // creates a new button
  const completedBtn = document.createElement('button');
  // adds the font awesome checkmak icon to our new button
  completedBtn.innerHTML = `<i class="fa fa-check"></i>`;
  // adds the class to our newly created btn
  completedBtn.classList.add('complete-btn');
  // adds the button to our newly created div
  todoDiv.appendChild(completedBtn);

  // delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = `<i class="fa fa-trash"><i/>`;
  deleteBtn.classList.add('delete-btn');
  todoDiv.appendChild(deleteBtn);

  // Adds the new todo div we created with all our new created Li and buttons
  todoList.appendChild(todoDiv);
  // clear the todo input value
  todoInput.value = '';
}

function deleteCheck(event) {
  const item = event.target;
  // delete the Todo
  if (item.classList[0] === 'delete-btn') {
    // targets the parent element so the parent element of this is the LI
    const todo = item.parentElement;
    // create a class of fall for styling for a fall animation
    todo.classList.add('fall');
    // remove the element from the page
    // waits for the transition to end then  it removes the element!
    todo.addEventListener('transitionend', () => {
      todo.remove();
    });
    // todo.remove();
  }
  // check mark to mark as completed
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    // creates a toggle class to the item we have created
    todo.classList.toggle('completed');
  }
}

// Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
