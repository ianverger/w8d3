Array.prototype.myEach = function(callback) {
    for (i = 0; i < this.length; i++) {
        let ele = this[i];
        callback(ele);
    }
}

function neg(num) {
    return (num * -1);
}

function timesTwo(num) {
    console.log(num * 2)
}

let arr1 = [1,2,3];

arr1.myEach(timesTwo);