const min = require('./min');

describe('Min', () => {

    it('min([1,2,3])', () => {
        array = [1,2,3];
        expect(min(array)).toEqual(1);
    });

    it('min([3,2,1])', () => {
        array = [3,2,1];
        expect(min(array)).toEqual(1);
    });

    it("min([4,2,6,3])", () => {
        array = [2,5,6,3];
        expect(min(array)).toEqual(2);
    });

    it('min([1])', () => {
        array = [1];
        expect(min(array)).toEqual(1);
    });

    it('min([])', () => {
        array = [];
        expect(min(array)).toEqual(undefined);
    });

})
