
import { calcLinePercentage, getFromStorage } from '../src/utils.js';


const ctx = document.getElementById('myChart').getContext('2d');

let data = localStorage.getItem('Stat Array');
let parsedData = getFromStorage(data);


let percentData = [];
parsedData.forEach(element => {
    let percentArray = calcLinePercentage(element.timesDisplayed, element.timesClicked);
    percentData.push(percentArray);
    
});

let labelData = [];
parsedData.forEach(element => {
    
    labelData.push(element.id);
    
});

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labelData,
        datasets: [{
            label: 'Most Popular Products',
            data: percentData,
            backgroundColor: ['cyan', 'magenta', 'green', 'purple', 'yellow', 'pink', 'lightgreen', 'lightgrey', 'orange', 'skyblue', 'cyan', 'magenta', 'green', 'purple', 'yellow', 'pink', 'lightgreen', 'lightgrey', 'orange', 'skyblue']
        }]
        
    },
   
    
  
});
