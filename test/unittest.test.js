

// import { calculateDiscount } from "../unittest-practice";

const { calculateDiscount, filterProducts, sortInventory } = require('../unittest-practice.js');

// calculate the discount
describe('calcuteDiscount', () => {
    test("applies a valid discount rate", function() {
        expect(calculateDiscount(100, 0.1)).toBe(90);
    });

    test("discount price", ()=> {
        expect(calculateDiscount(70, 0.2)).toBe(56);
    })

    test('negative discount', ()=> {
        expect(calculateDiscount(70, 4)).toBe(null);
    })

    test('discount edge case', () => {
        expect(calculateDiscount()).toBe(null);
    })
})

// filterProduct

describe('filterProduc', () => {
    const testArr = ['park', 'running', 'school', 'fly', 'hel'];
    test('fileter product', () => {
        expect(filterProducts(testArr, (prod) => prod.length < 4 )).toStrictEqual(['fly', 'hel'])
    })

    test('fileter product', () => {
        expect(filterProducts(testArr, (prod) => prod === 'beach' )).toStrictEqual([]);
    })

    test('fileter product', () => {
        expect(filterProducts('', (prod) => prod  )).toStrictEqual([]);
    })
});

// sortInventory

describe('sortInventory', () => {
    const inventory = ['park','school', 'fly', 'hel'];
    test("positive invetory test", () => {
        expect(sortInventory(inventory, 'park')).toBe(true);
    });

    test("invetory test", () => {
        expect(sortInventory(inventory, 'village')).toBe(false);
    });

    test("invetory test", () => {
        expect(sortInventory(inventory, [])).toStrictEqual([]);
    });
})