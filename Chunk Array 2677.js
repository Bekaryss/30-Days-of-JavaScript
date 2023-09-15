/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let list = []
    let itemArr = [];
    for(let i=0; i < arr.length; i++) {
        itemArr.push(arr[i]);
        if(itemArr.length == size){
            list.push(itemArr);
            itemArr = [];
        }
    }
    
    if(itemArr.length > 0)
        list.push(itemArr);

    return list;
};
