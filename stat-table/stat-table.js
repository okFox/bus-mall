import renderStatTable from './render-stat-table.js';
import { getFromStorage } from '../src/utils.js';







const tbody = document.querySelector('tbody');

let currentStatsArray = getFromStorage('Stats Array');

currentStatsArray.forEach(element => {
    let dom = renderStatTable(element.id, element.timesDisplayed, element.timesClicked);
    tbody.appendChild(dom);
});
//statsArray.forEach(element => )

//let dom = renderStatTable(element.id, element.timesDisplayed, element.timesClicked);







//const tbody = document.querySelector('tbody');

//tbody.appendChild(dom);