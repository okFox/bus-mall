import { calcLinePercentage } from '../src/utils.js';




function renderStatTable(productId, timesDisplayed, timesClicked) {

   
    
    const tr = document.createElement('tr');

    //get id of product selected, output to DOM
    const idcell = document.createElement('td');
    idcell.classname = 'product-id';
    idcell.textContent = productId;
    tr.appendChild (idcell);

    //get timesDisplayed, outputs to DOM
    const displayedCell = document.createElement('td');
    displayedCell.textContent = timesDisplayed;
    tr.appendChild(displayedCell);

    //get timesClicked, output to DOM
    const clickedCell = document.createElement('td');
    clickedCell.textContent = timesClicked;
    tr.appendChild(clickedCell);

    //calculate percentage chosen, output to DOM
    const percentCell = document.createElement('td');
    percentCell.className = 'percent-clicked';
    const thisProductPercentage = calcLinePercentage(timesDisplayed, timesClicked);
    percentCell.textContent = thisProductPercentage;
    tr.appendChild(percentCell);
   
    return tr;
}

export default renderStatTable;