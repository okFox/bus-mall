//get statsArray from local storage
//syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
import arrayOfProducts from '../data/products-api.js';
import { calcLinePercentage, getFromStorage } from '../src/utils.js';



//let result = percentArray.map(a => a.foo);


///chart begins below
const ctx = document.getElementById('myChart').getContext('2d');
const labels = arrayOfProducts; //how to get ids of products??
let data = localStorage.getItem('Stat Array');
let parsedData = getFromStorage(data);



//let percentArray = calcLinePercentage(data.timesDisplayed, data.timesClicked);
//console.log(data.timesClicked, timesDisplayed)
let percentData = [];
parsedData.forEach(element => {
    let percentArray = calcLinePercentage(element.timesDisplayed, element.timesClicked);
    percentData.push(percentArray);
    
});

let labelData = [];
parsedData.forEach(element => {
    
    labelData.push(element.id);
    
});

let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelData,
        datasets: [{
            label: 'Most Popular Products',
            data: percentData,
            backgroundColor: ['cyan', 'magenta']
        }]
        
    },
   
   
});
