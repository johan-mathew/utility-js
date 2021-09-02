const head = require('./head');

describe('Add', () => {

    it('Head([1,2,3])', () => {
        array = [1,2,3];
        expect(head(array)).toEqual(1);
    });

    it("Head(['cat','dog',1,2,3])", () => {
        array = ['cat','dog',1,2,3];
        expect(head(array)).toEqual('cat');
    });

    it('Head([])', () => {
        array = [];
        expect(head(array)).toEqual(null);
    });

})
