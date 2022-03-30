const { test, expect } = require('@jest/globals');


const sum = require('./sum');

describe('test sum function', function(){
test('1 + 2 = 3', ()=>{
    expect(sum(1,2)).toBe(3);
});
});