import React from 'react';

import { Slide, Heading } from 'spectacle';

import '../browser-frame.css';

const template = `
  <html>
    <head>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
        crossorigin="anonymous"></script>
      <style>
        body { font-family: sans-serif; background-color: white; }
      </style>
    </head>

    <body>
      <h1>Ma liste de tâches : </h1>
      <ul id="todo-list">
        <form id="todo-controls">
          <input type="text" id="todo-input"/>
          <button id="todo-submit">Envoyer</button>
        </form>
      </ul>
    </body>

    <script type="text/javascript">
      var todos = [
        'Préparer la mini-forma de mercredi',
        'Avancer le frontend fil rouge'
      ];

      var todoList = $('#todo-list');
      var todoInput = $('#todo-input');
      var todoSubmit = $('#todo-submit');
      var todoControls = $('#todo-controls');

      function removeTodoLi (target) {
        target.parent().remove();
      }

      function appendTodoLi (content) {
        var element = $('<li></li>', {
          text: content + ' '
        });
        var deleteButton = $('<button></button>', {
          text: 'X'
        });
        deleteButton.click(handleRemoveTodo);
        element.append(deleteButton);
        todoControls.before(element);
      }

      function handleRemoveTodo(e) {
        var element = $(e.target);
        var content = element.text();
        var i = todos.indexOf(content);
        todos.splice(i, 1);
        removeTodoLi(element);
      }

      function setup () {
        todos.forEach(appendTodoLi);

        todoControls.submit(function (e) {
          e.preventDefault();
          var content = todoInput.val();
          todos.push(content);
          appendTodoLi(content);
          todoInput.val('');
        });
      }

      $(document.body).ready(setup);
    </script>
  </html>

`;

export default (
  <Slide bgColor="primary" padding="100px" className="full-height">
    <Heading size={3} textColor="tertiary" margin="20px">
      Impératif VS déclaratif, exemple
    </Heading>
    <div className="browser-frame">
      <div className="titlebar">
        <span className="icon icon-0" />
        <span className="icon icon-1" />
        <span className="icon icon-2" />
        <div className="title">Ma liste de tâches</div>
      </div>
      <div className="toolbar">
        <input type="text" value=".../jquery.html" disabled />
      </div>
      <iframe
        title="exemple 1 avec iframe"
        srcdoc={template}
        style={{
          width: '100%',
          border: 'none',
          flex: 1
        }}
      />
    </div>
  </Slide>
);
