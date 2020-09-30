
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let arrayOfNumbers = [];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number') {
            arrayOfNumbers.push(array[i]); 
        }; 
    };
    return Math.min(...arrayOfNumbers);
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let arrayOfNumbers = [];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number') {
            arrayOfNumbers.push(array[i]); 
        }; 
    };
    return Math.max(...arrayOfNumbers);
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let arrayOfNumbers = 0;
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number') {
            arrayOfNumbers += array[i]; 
        }; 
    };
    return arrayOfNumbers/array.length;
}
