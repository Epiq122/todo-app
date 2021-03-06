// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Functions

// Add our Todo and create LI and new divs and buttons
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

// Delete The Todos
function deleteCheck(event) {
  const item = event.target;
  // delete the Todo
  if (item.classList[0] === 'delete-btn') {
    // targets the parent element so the parent element of this is the LI
    const todo = item.parentElement;
    // create a class of fall for styling for a fall animation
    todo.classList.add('fall');
    // remove the element from the page
    // waits for the transition to end then  it removes the
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

// Filter the TODO function with the select

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (event.target.value) {
      // if you click on all we want to show all of the items
      case 'all':
        todo.style.display = 'flex';
        break;
      // when we click on complete
      case 'completed':
        // if the todo has a class of completed style it with display flex
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
          // if it doesnt have the class of completed in it change the style to none
        } else {
          todo.style.display = 'none';
        }
        break;
      // if the element IS NOT complted display it as incomplete - if it doesnt have complete
      case 'incomplete':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      default:
    }
  });
}

// Event Listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
