const tail = require('./tail');

describe('tail', () => {

    it('tail([1,2,3])', () => {
        array = [1,2,3];
        expect(tail(array)).toEqual([2,3]);
    });

    it("tail(['cat','dog',1,2,3])", () => {
        array = ['cat','dog',1,2,3];
        expect(tail(array)).toEqual(['dog',1,2,3]);
    });

    it('tail([1])', () => {
        array = [1];
        expect(tail(array)).toEqual(undefined);
    });

    
    it('tail([])', () => {
        array = [];
        expect(tail(array)).toEqual(undefined);
    });
})
