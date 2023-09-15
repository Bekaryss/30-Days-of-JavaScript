/**
 * @param {Function} fn
 */
function memoize(fn) {
    let dict = new Map()
    return function(...args) {
        let key = fn.name + "-" + args.join("-");
        if(dict.has(key)){
            return dict.get(key);
        }
        dict.set(key, fn(...args));

         return dict.get(key);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */