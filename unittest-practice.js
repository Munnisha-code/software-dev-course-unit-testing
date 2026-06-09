function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    const discountedP = price * discountRate;

    return price - discountedP;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic

    const filterProd = products.filter(callback);
    return filterProd;
}
const testArr = ['park', 'running', 'school', 'fly', 'hel'];
console.log(filterProducts(testArr, (prod) => prod.length < 4), 'here ----');

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic

    return inventory.includes(key);
}

module.exports = {
    filterProducts,
    sortInventory,
    calculateDiscount
};