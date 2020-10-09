const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: 'axe',
    durability: '57',
    enhancement: 12
};

describe('updateItems', () => {
    it('should bring durability up to 100', () => {
        const expected = 100;
        const actual = enhancer.repair(item);
        expect(actual.durability).toBe(expected);
    });
    it('should bring durability down by 5 since enhancement is lvl 12', () => {
        const expected = 52;
        const actual = enhancer.fail(item);
        expect(actual.durability).toBe(expected);
    })
    it('enhancement should remain the same since it is below lvl 20', () => {
        const expected = 12;
        const actual = enhancer.success(item);
        expect(actual.enhancement).toBe(expected);
    })
    it('name should be modified if enhancement is greater than 12', () => {
        const expected = `[+12] axe`;
        const actual = enhancer.get(item);
        expect(actual.name).toBe(expected);
    })
})