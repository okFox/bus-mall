export function calcLinePercentage(timesDisplayed, timesClicked) {
    const percentage = Math.round((timesClicked / timesDisplayed) * 100);
    return `${percentage}%`;
}
//need to turn percentage to display as 00%

Math.round();

  
export const generateRandomInt = (array) => {
    return Math.floor(Math.random() * array.length);
};

export const getNewProductIndices = (array, previousProducts) => {
    let newProductIndices = [];
    while (newProductIndices.length < 3){
        const number = generateRandomInt(array);
        if (!previousProducts.includes(number) && !newProductIndices.includes(number)){
            newProductIndices.push(number);
        }
    }
    return newProductIndices;
};

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }

    return null;
}


export function saveToStorage(statArray) {
    const json = JSON.stringify(statArray);
    localStorage.setItem('Stat Array', json);
}

export function getFromStorage() {
    const json = localStorage.getItem('Stat Array');
    if (!json) return null;
    const parsedStatArray = JSON.parse(json);
    return parsedStatArray;
}