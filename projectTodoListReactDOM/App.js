import React from "react";
import "./styles.css";

let id = 0;

const Todo = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onCheck}
    />
    <span>{props.todo.text}</span>
    <button onClick={props.onDelete}>delete</button>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo() {
    const text = prompt("TODO text please!");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }],
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        };
      }),
    });
  }

  render() {
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div>
        <div>
          Unchecked todo count:{" "}
          {this.state.todos.reduce(
            (prev, cur) => (!cur.checked ? prev + 1 : prev),
            0
          )}
        </div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              todo={todo}
              onDelete={() => this.removeTodo(todo.id)}
              onCheck={() => this.toggleTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
