  
export default class ProductArray {
    constructor(products) {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }

    getRandomProductFromIndex(i) {
        return this.products[i];
    }
}