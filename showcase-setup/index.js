// document.body.innerHTML =  `<h1>Hello Form <span>
//  index.js
//  </span>
//  </h1>`

import'./style.css';

const element = document.querySelector('h1');

if (!element) {
    alert('No h1 element found')
};

element.textContent = `I was updated with js`