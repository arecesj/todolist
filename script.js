var todoList = {
  todos: [],
  displayTodos: function() {
    if (!this.todos.length) console.log('Todo list is empty');
    else {
      console.log('Todos:');
      for (let todo of this.todos) {
        console.log(todo.todoText);
        todo.completed
          ? console.log('(x)', todo.todoText)
          : console.log('( )', todo.todoText);
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (let todo of totalTodos) {
      if (todo.completed) completedTodos++;
    }

    if (completedTodos === totalTodos)
      for (let todo of totalTodos) todo.completed = false;
    else for (let todo of totalTodos) todo.completed = true;

    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      'changeTodoPositionInput'
    );
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById(
      'deleteTodoPositionInput'
    );
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      'toggleCompletedPositionInput'
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  }
};
