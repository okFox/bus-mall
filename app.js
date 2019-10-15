import productItemArray from './data/products-api.js';
import { calcLinePercentage, generateRandomInt, getNewProductIndices } from './src/utils.js';

let previousOptions = [1, 2, 3]; 

const product1 = document.getElementById('product-one');
const product2 = document.getElementById('product-two');
const product3 = document.getElementById('product-three');
const image1 = document.getElementById('image-one');
const image2 = document.getElementById('image-two');
const image3 = document.getElementById('image-three');


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

let newIndices = getNewProductIndices(productItemArray, previousOptions);
renderProductOptions(newIndices, productItemArray);


