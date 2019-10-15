import renderStatTable from './render-stat-table.js';


let timesDisplayed = 4;
let timesChecked = 2;
let productId = 'banana';

let dom = renderStatTable(productId, timesDisplayed, timesChecked);







const tbody = document.querySelector('tbody');

tbody.appendChild(dom);