

export function getPrice(arr) {
    let prices = [];

    for (let i = 0; i < arr.length; i++) {
        const price = arr[i].price;
        prices.push(price);
    }

    return prices;
}