import arrayOfProducts from './data/products-api.js';
import { getNewProductIndices } from './src/utils.js';
import ProductArray from './data/product-array.js';

let previousOptions = [1, 2, 3]; 
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
let newIndices = getNewProductIndices(productItemArray, previousOptions);
renderProductOptions(newIndices, productItemArray);


// (newIndices, productItemArray)
function renderProductOptions(randomArray, array) {

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


function handleUserChoice(event) {
    let clickedElement = event.target.value;
  
    statsArray = 

}








// iterate through productsSelections
productsSelection.forEach(element => {
    element.addEventListener('input', handleUserChoice);
});






newIndices = getNewProductIndices(productItemArray, previousOptions);
renderProductOptions(newIndices, productItemArray);