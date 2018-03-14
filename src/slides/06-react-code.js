import React from 'react';
import CodeSlide from 'spectacle-code-slide';

const code = `class TodoList extends React.Component {
  state = {
    input: '',
    todos: [
      'Préparer la mini-forma de mercredi',
      'Avancer le frontend fil rouge'
    ]
  };

  handleInputChange = e => {
    this.setState({ input: e.target.value });
  };

  handleDeleteTodo = content => () => {
    this.setState(state => {
      return { todos: state.todos.filter(c => c !== content) };
    });
  };

  handleAddTodo = e => {
    e.preventDefault();
    this.setState(state => {
      return { todos: state.todos.concat([state.input]), input: '' };
    });
  }

  render () {
    const { todos, input } = this.state;

    return <ul>
      { todos.map(content => <li key={content}>{content} <button onClick={this.handleDeleteTodo(content)}>X</button></li>) }
      <form id="todo-controls" onSubmit={this.handleAddTodo}>
        <input type="text" value={input} onChange={this.handleInputChange}/>
        <button id="todo-submit">Envoyer</button>
      </form>
    </ul>
  } 
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);
`;

export default (
  <CodeSlide
    className="code-slide"
    textColor="secondary"
    transition={[]}
    lang="graphql"
    code={code}
    ranges={[
      { loc: [1, 8], title: 'Déclaration du state' },
      { loc: [26, 37], title: 'Déclaration de la vue' },
      { loc: [9, 25], title: 'Prise en charge des évènements' },
    ]}
  />
);
