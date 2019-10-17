//get statsArray from local storage
//syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


let percentArray = document.getElementsByClassName('percent-clicked');
console.log(percentArray);
let result = percentArray.map(a => a.foo);


///chart begins below
const ctx = document.getElementById('myChart').getContext('2d');
const labels = ['Product', 'Times Clicked', 'Times Displayed'];

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Most Popular Products',
            data: [1, 2, 3],
            backgroundColor: ['cyan', 'magenta']
        }]
    },
    
});