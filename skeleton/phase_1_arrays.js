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

// let arr1 = [5,4,2,9,7,6,34,3,-34]

// console.log(arr1.twoSum());

// Array.prototype.transpose = function() {
//     let trans = []; // [ [1,] [] [] ]

//     for (let i = 0; i < this.length; i++) {
//         trans.push([]); 
//     }

//     for (let i = 0; i < this.length; i++) {
//         for (let j = 0; j < this.length; j++) {
//           trans[j].push(this[i][j]);
//         }
//     }
//     return trans;
// }

Array.prototype.transpose = function() {
    let trans = [];

    for (let i = 0; i < this.length; i++) {
        let ele = this[i];
        let subArr = [];
        for (let j = 0; j < ele.length; j++) {
            let sub_arr = this[j]
            subArr.push(sub_arr[i])
        }
        trans.push(subArr);
    }

    return trans;
}

let arr1 = [[1,2,3],[4,5,6]]

console.log(arr1.transpose())
