const max = require('./max');

describe('Max', () => {

    it('Max([1,2,3])', () => {
        array = [1,2,3];
        expect(max(array)).toEqual(3);
    });

    it('Max([3,2,1])', () => {
        array = [3,2,1];
        expect(max(array)).toEqual(3);
    });

    it("Max([2,5,6,3])", () => {
        array = [2,5,6,3];
        expect(max(array)).toEqual(6);
    });

    it('Max([1])', () => {
        array = [1];
        expect(max(array)).toEqual(1);
    });

    it('Max([])', () => {
        array = [];
        expect(max(array)).toEqual(undefined);
    });

})
