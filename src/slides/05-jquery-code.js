import React from 'react';
import CodeSlide from 'spectacle-code-slide';

const code = `var todos = [
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
`;

export default (
  <CodeSlide
    className="code-slide"
    textColor="secondary"
    transition={[]}
    lang="graphql"
    code={code}
    ranges={[
      { loc: [5, 9], title: 'Récupération des éléments' },
      { loc: [34, 47], title: 'Préparation de la vue' },
      { loc: [26, 33], title: 'Suppression' },
      { loc: [10, 25], title: 'Mise à jour de la vue' }
    ]}
  />
);
