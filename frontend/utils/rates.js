const axios = require('axios').default;
const api_key = require('../config.json').shippo_api_key;

async function get_rates(from, to, parcel) {
    response = await axios.post('https://localhost:5000/rates', {
        "api_key": api_key,
        "address_from": from,
        "address_to": to,
        "parcel": parcel
        })
    return response;
}

module.exports = { get_rates };