const last = (function(){
    'use strict';
    const fn = function(arr){
        if(Object.prototype.toString.call(arr).toLowerCase() !== '[object array]'){
            return new TypeError('last() expects an array parameter');
        }
        return arr.length > 1 ? arr[arr.length-1] : arr.length === 1 ? arr[0] : [];
    }
    return fn;
})();

if (typeof module === 'object' && module.exports) {
    module.exports = last;
}