const { Calculator } = require('../HomeWork15')

const calculator = new Calculator();

describe(`calculator check`, function() {
    it(`check divide1`, async ()=>{
expect(calculator.divide(6,3)).toEqual(2);
    })
    it(`check divide2`, async ()=>{
        expect(calculator.divide(1,0)).toEqual(Infinity);
            })
    it(`check substraction1`, async ()=>{
        expect(calculator.subtraction(10,2)).toEqual(8);
    })
    it(`check substraction2`, async ()=>{
        expect(calculator.subtraction(0,1)).toEqual(-1);
    })
    it(`check exponentiation1`, async ()=>{
        expect(calculator.exponentiation(3)).toEqual(9);
    })
    it(`check exponentiation2`, async ()=>{
        expect(calculator.exponentiation(0)).toEqual(0);
    })
    it(`check exponentiation3`, async ()=>{
        expect(calculator.exponentiation(-2)).toEqual(4);
    })
    it(`check add1`, async()=>{
        expect(calculator.add(1,2,3)).toEqual(6);
    })
    it(`check add2`, async()=>{
        expect(calculator.add(-2,2,0)).toEqual(0);
    })
    it(`check add3`, async()=>{
        expect(calculator.add(1,null,3)).toEqual(4);
    })
    it(`check multiply1`, async ()=>{
        expect(calculator.multiply(2,3,5)).toEqual(30);
    })
    it(`check multiply2`, async ()=>{
        expect(calculator.multiply(2,3,0)).toEqual(0);
    })
    it(`check multiply3`, async ()=>{
        expect(calculator.multiply(2,3,5,-1)).toEqual(-30);
    })
})