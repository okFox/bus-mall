import arrayOfProducts from './data/products-api.js';
import { getNewProductIndices, findById } from './src/utils.js';
import ProductArray from './data/product-array.js';


let previousIndices = [-1, -1, -1]; 

let statsArray = [];

const product1 = document.getElementById('product-one');
const product2 = document.getElementById('product-two');
const product3 = document.getElementById('product-three');
const image1 = document.getElementById('image-one');
const image2 = document.getElementById('image-two');
const image3 = document.getElementById('image-three');
const productsSelection = document.querySelectorAll('input');

let productsArray = new ProductArray(arrayOfProducts);
let productItemArray = productsArray.getProducts(); 

// set new page at start
let newIndices = getNewProductIndices(productItemArray, previousIndices);
renderProductOptions(newIndices, productItemArray);

productsSelection.forEach(element => {
    element.addEventListener('input', handleUserChoice);
});

// (newIndices, productItemArray)
function renderProductOptions(randomArray, array) {

    updateTimesDisplayed();
    let optionOne = array[randomArray[0]];
    let optionTwo = array[randomArray[1]];
    let optionThree = array[randomArray[2]];

    image1.setAttribute('src', optionOne.getImage());
    product1.setAttribute('value', optionOne.getId());

    image2.setAttribute('src', optionTwo.getImage());
    product2.setAttribute('value', optionTwo.getId());
    
    image3.setAttribute('src', optionThree.getImage());
    product3.setAttribute('value', optionThree.getId());
}

function updateTimesDisplayed() {
    newIndices.forEach(element => {
        if (!findById(statsArray, productItemArray[element].id)){
            statsArray.push({
                id: productItemArray[element].id, 
                timesDisplayed: 1, 
                timesClicked: 0 });
        }
        else {
            let statItem = findById(statsArray, productItemArray[element].id);
            statItem.timesDisplayed ++;
        }
    });
}

function handleUserChoice(event) {

    let clickedElement = event.target.value;
    // increment times picked for one item   
    let statItem = findById(statsArray, clickedElement);
    statItem.timesClicked ++;
    // update previous three
    previousIndices = newIndices;
    // get three new products to display
    newIndices = getNewProductIndices(productItemArray, previousIndices);
    // display new products on page
    productsSelection.forEach(element => {
        element.checked = false;
    });
    renderProductOptions(newIndices, productItemArray);
}

// iterate through productsSelections
productsSelection.forEach(element => {
    element.addEventListener('input', handleUserChoice);

});