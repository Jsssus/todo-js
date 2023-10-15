import './styles.css';

import {Todo,TodoList} from './classes';//buscará el index.js por defecto
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach (crearTodoHtml);
// todoList.todos.forEach ( todo => crearTodoHtml(todo)); es lo mismo de arriba
// esto solo funciona si regresa un argumento

console.log('todos',todoList.todos);