/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filter = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            filter.push(arr[i])
        }
    }

    return filter;
};