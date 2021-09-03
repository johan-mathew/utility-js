const map = require('./map');

describe('Map', () => {
    const cube = jest.fn(x => x*x*x);
    const identity = jest.fn(x => x);
    const square = jest.fn(x => x*x);

    it('map([], cube)', () => {
        array = [];
        expect(map(array,cube)).toEqual([]);
    });

    it('map([1,2,3], identity)', () => {
        array = [1,2,3];
        expect(map(array,identity)).toEqual([1,2,3]);
    });
    
    it("map([1,2,3], cube)", () => {
        array = [1,2,3];
        expect(map(array, cube )).toEqual([1,8,27]);
    });

    it("map([1,2,3], square)", () => {
        array = [1,2,3];
        expect(map(array, square )).toEqual([1,4,9]);
    });

    it("map([{x : 10}],someObject => someObject.x + 1)", () => {
        array = [{x : 10}];
        expect(map(array, someObject => someObject.x + 1 )).toEqual([11]);
    });

    it("map([{x : 10},{x : 20}],someObject => someObject.x + 1)", () => {
        array = [{x : 10},{x: 20}];
        expect(map(array, someObject => someObject.x + 1 )).toEqual([11,21]);
    });
    
})
