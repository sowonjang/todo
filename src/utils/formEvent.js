import { dateParser } from './dateParser.js';
import { setLocalStorage } from '../utils/localStorage.js';
import { card } from '../components/card.js';


export default function formEvent(todos, render) {
  console.log('form')
  const title = document.querySelector('.title');
  const form = document.querySelector('form');
  dateParser()
  console.log(form);
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const obj = {
      title: title.value,
      date: dateParser(),
    }

    todos.push(card(obj))
    // console.log(todos)
    setLocalStorage('todos', todos);
    render();
  })
}