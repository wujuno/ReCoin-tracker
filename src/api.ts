
const BASE_URL = `https://api.upbit.com/v1`;


export function fetchCoins() {
    return fetch(`${BASE_URL}/market/all`).then(response => response.json());
}