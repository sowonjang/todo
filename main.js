import { form } from './src/components/form.js';
import { layout } from './src/components/layout.js';
import formEvent from './src/utils/formEvent.js';
import { getLocalStorage } from './src/utils/localStorage.js';

const root = document.querySelector('#root');



let todos = [];
let dones = [];


function render() {
  todos = getLocalStorage('todos') || [];
  dones = getLocalStorage('dones') || [];

  root.innerHTML = `
  ${form()}
  ${layout}
`
  formEvent(todos, render)
  const todoEl = document.querySelector('.todo ul');
  todoEl.innerHTML = todos.join('')

  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach(btn => btn.addEventListener('click', () => { console.log(123) }))

  const moveBtn = document.querySelectorAll(".move");
  moveBtn.forEach(btn => btn.addEventListener('click', () => { console.log(456) }))

  const modifyBtn = document.querySelectorAll(".modify");
  modifyBtn.forEach(btn => btn.addEventListener('click', () => { console.log(789) }))


}



render();