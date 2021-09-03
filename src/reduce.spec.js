const reduce = require('./reduce');

describe('Reduce', () => {
    
    it('reduce([],(x,y)=>x+y)', () => {
        array = [];
        expect(reduce(array,(x,y)=> x + y )).toEqual(undefined);
    });

    it('reduce([],(x,y)=>x+y,10))', () => {
        array = [];
        expect(reduce(array,(x,y) => x + y ,10)).toEqual(10);
    });

    it("reduce(['1','2','3'],(x,y)=>x+y)", () => {
        array = [1,2,3];
        expect(reduce(array,(x,y) => x + y )).toEqual(6);
    });

    it("reduce(['a','b','c'],(x,y)=>x+y)", () => {
        array = ['a','b','c'];
        expect(reduce(array,(x,y) => x + y )).toEqual("abc");
    });

    it("reduce(['a','b','c'],(x,y)=>x+y)", () => {
        array = ['a','b','c'];
        expect(reduce(array,(x,y) => x + y,'z' )).toEqual("zabc");
    });
})
