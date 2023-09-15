/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let tArr = [];
    for(let i = 0; i < arr.length; i++){
        tArr[i] = fn(arr[i], i)
    }

    return tArr;
};