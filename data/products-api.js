class Product {
    constructor(id, name, image) {
        this.id = id;
        this.name = name;
        this.image = image;
    }
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getImage() {
        return this.image;
    }
}
  
const bag = new Product('bag', 'Bag', '../assets/bag.jpg');

const banana = new Product('banana', 'Banana', '../assets/banana.jpg');

const bathroom = new Product('bathroom', 'Bathroom', '../assets/bathroom.jpg');

const boots = new Product('boots', 'Boots', '../assets/boots.jpg');

const breakfast = new Product('breakfast', 'Breakfast', '../assets/breakfast.jpg');

const bubblegum = new Product('bubblegum', 'Bubblegum', '../assets/bubblegum.jpg');

const chair = new Product('chair', 'Chair', '../assets/chair.jpg');

const cthulhu = new Product('cthulhu', 'cthulhu', '../assets/cthulhu.jpg');

const dogDuck = new Product('dog-duck', 'Dog Duck', '../assets/dog-duck.jpg');

const dragon = new Product('dragon', 'Dragon', '../assets/dragon.jpg');

const pen = new Product('pen', 'Pen', '../assets/pen.jpg');

const petSweep = new Product('pet-sweep', 'Pet Sweep', '../assets/pet-sweep.jpg');

const scissors = new Product('scissors', 'Scissors', '../assets/scissors.jpg');

const shark = new Product('shark', 'Shark', '../assets/shark.jpg');

const sweep = new Product('sweep', 'Sweep', '../assets/sweep.jpg');

const tauntaun = new Product('tauntaun', 'Tauntaun', '../assets/tauntaun.jpg');

const unicorn = new Product('unicorn', 'Unicorn', '../assets/unicorn.jpg');

const usb = new Product('usb', 'Usb', '../assets/usb.jpg');

const waterCan = new Product('water-can', 'Water Can', '../assets/water-can.jpg');

const wineGlass = new Product('wine-glass', 'Wine Glass', '../assets/wine-glass.jpg');


const productItemArray = [
    bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass
];

export default productItemArray;