import renderStatTable from './render-stat-table.js';


let timesDisplayed = 4;
let timesClicked = 2;
let productId = 'banana';

let dom = renderStatTable(productId, timesDisplayed, timesClicked);







const tbody = document.querySelector('tbody');

tbody.appendChild(dom);