const axios = require('axios').default;
const api_key = require('./config.json').shippo_api_key;

async function get_rates() {
    response = await axios.post('https://localhost:5000/rates', {
        "api_key": api_key,
        "address_from": {
            "name": "Shawn Ippotle",
            "street1": "215 Clayton St.",
            "city": "San Francisco",
            "state": "CA",
            "zip": "94117"
        },
        "address_to": {
            "name": "Mr Hippo",
            "street1": "Broadway 1",
            "city": "New York",
            "state": "NY",
            "zip": "10007"
        },
        "parcels": [
            {
                "length": "5",
                "width": "5",
                "height": "5",
                "distance_unit": "cm",
                "weight": "2",
                "mass_unit": "kg"
            }
        ]
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    return response;
}

module.exports = { get_rates };