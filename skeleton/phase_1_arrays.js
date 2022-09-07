Array.prototype.uniq = function() {
    let uniqArr = [];

    for (let i = 0; i < this.length; i++) {
        if (uniqArr.indexOf(this[i]) === -1 ) {
            uniqArr.push(this[i]);
        }
    }

    return uniqArr;
}

Array.prototype.twoSum = function() {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if ( this[i] + this[j] === 0 ) {
                newArr.push([i, j]);
            }
        }
    }

    return newArr; 
}

let arr1 = [5,4,2,9,7,6,34,3,-34]

console.log(arr1.twoSum());
