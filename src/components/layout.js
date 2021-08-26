import { list } from './list.js';

export const layout = `
  <div class="wrap">
    <div class="list_container todo">
      <h2>할일 목록</h2>
      <ul>
        <li>${list()}</li>
        <li>${list()}</li>
        <li>${list()}</li>
      </ul>
    </div>
    <div class="list_container done">
      <h2>완료 목록</h2>
      <ul>
        <li>${list()}</li>
        <li>${list()}</li>
        <li>${list()}</li>
      </ul>
    </div>
  </div>
  `
