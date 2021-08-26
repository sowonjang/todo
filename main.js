import { form } from './src/components/form.js';
import { layout } from './src/components/layout.js';
import { list } from './src/components/list.js';

const root = document.querySelector('#root');
root.innerHTML = `
  ${form()}
  ${layout}
`
