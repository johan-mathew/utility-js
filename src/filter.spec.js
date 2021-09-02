const filter = require('./filter');

describe('Filter', () => {
    const filterUpperCase = jest.fn(x => x == x.toUpperCase());

    it('filter([], x => true)', () => {
        array = [];
        expect(filter(array, x => true)).toEqual([]);
    });

    it('filter([1,2,3], x => true)', () => {
        array = [1,2,3];
        expect(filter(array, x => true)).toEqual([1,2,3]);
    });
    
    it('filter([1,2,3], x => false)', () => {
        array = [1,2,3];
        expect(filter(array, x => false)).toEqual([]);
    });

    it('filter([1,2,3], x => x > 1)', () => {
        array = [1,2,3];
        expect(filter(array, x => x > 1)).toEqual([2,3]);
    });

    it("filter(['a','B','c','D'], filterUpperCase)", () => {
        array = ['a','B','c','D'];
        expect(filter(array,filterUpperCase)).toEqual(['B','D']);
    });
})
