const last = require('../last');
const assert = require('chai').assert;
describe('Last Element Of An Array',function(){
    it('Function Shuld Return The Last Element Of An Element',function(){
        assert.equal(last([1,-2,-1,-5]),-5);
        assert.equal(last([1]),1);
        assert.isArray(last([]),[]);
        assert.isObject(last([1,-2,-1,{}]),{});
        assert.isArray(last([1,-2,-1,[]]),[]);
    });
    it('Function Shuld Return A Type Error',function(){
        assert.equal(last(),'TypeError: last() expects an array parameter');
    });
})