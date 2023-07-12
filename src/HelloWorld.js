import React from 'react';
import ReactDOM from 'react-dom';

//create an element (this can be a navbar, a button, a div, etc.)
const element = <h1>Hello World</h1>;
console.log(element);

//set the element to the root element in index.html
ReactDOM.render(element, document.getElementById('root'));