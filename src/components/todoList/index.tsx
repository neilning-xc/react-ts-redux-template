import * as React from 'react';

import { IToggleTodoAction } from '../../store/actions';
import { Todo as TodoClass } from '../../store/types';
import Todo from '../todo';

interface IProps {
  todos: TodoClass[];
  toggleTodo: (id: number) => IToggleTodoAction;
}

const TodoList = ({ todos, toggleTodo }: IProps) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
